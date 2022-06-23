import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BaseURIUpdated as BaseURIUpdatedEvent,
  Minted as MintedEvent,
  NFTCreatorMigrated as NFTCreatorMigratedEvent,
  NFTMarketUpdated as NFTMarketUpdatedEvent,
  NFTMetadataUpdated as NFTMetadataUpdatedEvent,
  NFTOwnerMigrated as NFTOwnerMigratedEvent,
  PaymentAddressMigrated as PaymentAddressMigratedEvent,
  ProxyCallContractUpdated as ProxyCallContractUpdatedEvent,
  TokenCreatorPaymentAddressSet as TokenCreatorPaymentAddressSetEvent,
  TokenCreatorUpdated as TokenCreatorUpdatedEvent,
  TokenIPFSPathUpdated as TokenIPFSPathUpdatedEvent,
  Transfer as TransferEvent,
  Token as TokenContract,
} from "../generated/Token/Token";

import {
  Approval,
  ApprovalForAll,
  BaseURIUpdated,
  Minted,
  NFTCreatorMigrated,
  NFTMarketUpdated,
  NFTMetadataUpdated,
  NFTOwnerMigrated,
  PaymentAddressMigrated,
  ProxyCallContractUpdated,
  TokenCreatorPaymentAddressSet,
  TokenCreatorUpdated,
  TokenIPFSPathUpdated,
  Transfer,
  Token,
  User,
} from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;
  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;
  entity.save();
}

export function handleBaseURIUpdated(event: BaseURIUpdatedEvent): void {
  let entity = new BaseURIUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.baseURI = event.params.baseURI;
  entity.save();
}

export function handleMinted(event: MintedEvent): void {
  let entity = new Minted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.creator = event.params.creator;
  entity.tokenId = event.params.tokenId;
  entity.indexedTokenIPFSPath = event.params.indexedTokenIPFSPath.toString();
  entity.tokenIPFSPath = event.params.tokenIPFSPath;
  entity.save();
}

export function handleNFTCreatorMigrated(event: NFTCreatorMigratedEvent): void {
  let entity = new NFTCreatorMigrated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.tokenId = event.params.tokenId;
  entity.originalAddress = event.params.originalAddress;
  entity.newAddress = event.params.newAddress;
  entity.save();
}

export function handleNFTMarketUpdated(event: NFTMarketUpdatedEvent): void {
  let entity = new NFTMarketUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.nftMarket = event.params.nftMarket;
  entity.save();
}

export function handleNFTMetadataUpdated(event: NFTMetadataUpdatedEvent): void {
  let entity = new NFTMetadataUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.name = event.params.name;
  entity.symbol = event.params.symbol;
  entity.baseURI = event.params.baseURI;
  entity.save();
}

export function handleNFTOwnerMigrated(event: NFTOwnerMigratedEvent): void {
  let entity = new NFTOwnerMigrated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.tokenId = event.params.tokenId;
  entity.originalAddress = event.params.originalAddress;
  entity.newAddress = event.params.newAddress;
  entity.save();
}

export function handlePaymentAddressMigrated(
  event: PaymentAddressMigratedEvent
): void {
  let entity = new PaymentAddressMigrated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.tokenId = event.params.tokenId;
  entity.originalAddress = event.params.originalAddress;
  entity.newAddress = event.params.newAddress;
  entity.originalPaymentAddress = event.params.originalPaymentAddress;
  entity.newPaymentAddress = event.params.newPaymentAddress;
  entity.save();
}

export function handleProxyCallContractUpdated(
  event: ProxyCallContractUpdatedEvent
): void {
  let entity = new ProxyCallContractUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.proxyCallContract = event.params.proxyCallContract;
  entity.save();
}

export function handleTokenCreatorPaymentAddressSet(
  event: TokenCreatorPaymentAddressSetEvent
): void {
  let entity = new TokenCreatorPaymentAddressSet(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.fromPaymentAddress = event.params.fromPaymentAddress;
  entity.toPaymentAddress = event.params.toPaymentAddress;
  entity.tokenId = event.params.tokenId;
  entity.save();
}

export function handleTokenCreatorUpdated(
  event: TokenCreatorUpdatedEvent
): void {
  let entity = new TokenCreatorUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.fromCreator = event.params.fromCreator;
  entity.toCreator = event.params.toCreator;
  entity.tokenId = event.params.tokenId;
  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
    token.creator = event.params.to.toHexString();
    token.tokenID = event.params.tokenId;

    let tokenContract = TokenContract.bind(event.address);
    token.contentURI = tokenContract.tokenURI(event.params.tokenId);
    token.tokenIPFSPath = tokenContract.getTokenIPFSPath(event.params.tokenId);
    token.name = tokenContract.name();
    token.createdAtTimestamp = event.block.timestamp;
  }
  token.owner = event.params.to.toHexString();
  token.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}

export function handleTokenURIUpdated(event: TokenIPFSPathUpdatedEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) return;
  token.tokenIPFSPath = event.params.tokenIPFSPath;
  token.save();
}
