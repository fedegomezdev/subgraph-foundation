// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("approved", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Approval entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Approval", id.toString(), this);
    }
  }

  static load(id: string): Approval | null {
    return changetype<Approval | null>(store.get("Approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get approved(): Bytes {
    let value = this.get("approved");
    return value!.toBytes();
  }

  set approved(value: Bytes) {
    this.set("approved", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class ApprovalForAll extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("operator", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ApprovalForAll entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ApprovalForAll entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ApprovalForAll", id.toString(), this);
    }
  }

  static load(id: string): ApprovalForAll | null {
    return changetype<ApprovalForAll | null>(store.get("ApprovalForAll", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class BaseURIUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("baseURI", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BaseURIUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BaseURIUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BaseURIUpdated", id.toString(), this);
    }
  }

  static load(id: string): BaseURIUpdated | null {
    return changetype<BaseURIUpdated | null>(store.get("BaseURIUpdated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get baseURI(): string {
    let value = this.get("baseURI");
    return value!.toString();
  }

  set baseURI(value: string) {
    this.set("baseURI", Value.fromString(value));
  }
}

export class Minted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("creator", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("indexedTokenIPFSPath", Value.fromString(""));
    this.set("tokenIPFSPath", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Minted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Minted entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Minted", id.toString(), this);
    }
  }

  static load(id: string): Minted | null {
    return changetype<Minted | null>(store.get("Minted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get indexedTokenIPFSPath(): string {
    let value = this.get("indexedTokenIPFSPath");
    return value!.toString();
  }

  set indexedTokenIPFSPath(value: string) {
    this.set("indexedTokenIPFSPath", Value.fromString(value));
  }

  get tokenIPFSPath(): string {
    let value = this.get("tokenIPFSPath");
    return value!.toString();
  }

  set tokenIPFSPath(value: string) {
    this.set("tokenIPFSPath", Value.fromString(value));
  }
}

export class NFTCreatorMigrated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("originalAddress", Value.fromBytes(Bytes.empty()));
    this.set("newAddress", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTCreatorMigrated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NFTCreatorMigrated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NFTCreatorMigrated", id.toString(), this);
    }
  }

  static load(id: string): NFTCreatorMigrated | null {
    return changetype<NFTCreatorMigrated | null>(
      store.get("NFTCreatorMigrated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get originalAddress(): Bytes {
    let value = this.get("originalAddress");
    return value!.toBytes();
  }

  set originalAddress(value: Bytes) {
    this.set("originalAddress", Value.fromBytes(value));
  }

  get newAddress(): Bytes {
    let value = this.get("newAddress");
    return value!.toBytes();
  }

  set newAddress(value: Bytes) {
    this.set("newAddress", Value.fromBytes(value));
  }
}

export class NFTMarketUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("nftMarket", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTMarketUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NFTMarketUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NFTMarketUpdated", id.toString(), this);
    }
  }

  static load(id: string): NFTMarketUpdated | null {
    return changetype<NFTMarketUpdated | null>(
      store.get("NFTMarketUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nftMarket(): Bytes {
    let value = this.get("nftMarket");
    return value!.toBytes();
  }

  set nftMarket(value: Bytes) {
    this.set("nftMarket", Value.fromBytes(value));
  }
}

export class NFTMetadataUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("baseURI", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTMetadataUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NFTMetadataUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NFTMetadataUpdated", id.toString(), this);
    }
  }

  static load(id: string): NFTMetadataUpdated | null {
    return changetype<NFTMetadataUpdated | null>(
      store.get("NFTMetadataUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get baseURI(): string {
    let value = this.get("baseURI");
    return value!.toString();
  }

  set baseURI(value: string) {
    this.set("baseURI", Value.fromString(value));
  }
}

export class NFTOwnerMigrated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("originalAddress", Value.fromBytes(Bytes.empty()));
    this.set("newAddress", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NFTOwnerMigrated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save NFTOwnerMigrated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("NFTOwnerMigrated", id.toString(), this);
    }
  }

  static load(id: string): NFTOwnerMigrated | null {
    return changetype<NFTOwnerMigrated | null>(
      store.get("NFTOwnerMigrated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get originalAddress(): Bytes {
    let value = this.get("originalAddress");
    return value!.toBytes();
  }

  set originalAddress(value: Bytes) {
    this.set("originalAddress", Value.fromBytes(value));
  }

  get newAddress(): Bytes {
    let value = this.get("newAddress");
    return value!.toBytes();
  }

  set newAddress(value: Bytes) {
    this.set("newAddress", Value.fromBytes(value));
  }
}

export class PaymentAddressMigrated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("originalAddress", Value.fromBytes(Bytes.empty()));
    this.set("newAddress", Value.fromBytes(Bytes.empty()));
    this.set("originalPaymentAddress", Value.fromBytes(Bytes.empty()));
    this.set("newPaymentAddress", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save PaymentAddressMigrated entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PaymentAddressMigrated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PaymentAddressMigrated", id.toString(), this);
    }
  }

  static load(id: string): PaymentAddressMigrated | null {
    return changetype<PaymentAddressMigrated | null>(
      store.get("PaymentAddressMigrated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get originalAddress(): Bytes {
    let value = this.get("originalAddress");
    return value!.toBytes();
  }

  set originalAddress(value: Bytes) {
    this.set("originalAddress", Value.fromBytes(value));
  }

  get newAddress(): Bytes {
    let value = this.get("newAddress");
    return value!.toBytes();
  }

  set newAddress(value: Bytes) {
    this.set("newAddress", Value.fromBytes(value));
  }

  get originalPaymentAddress(): Bytes {
    let value = this.get("originalPaymentAddress");
    return value!.toBytes();
  }

  set originalPaymentAddress(value: Bytes) {
    this.set("originalPaymentAddress", Value.fromBytes(value));
  }

  get newPaymentAddress(): Bytes {
    let value = this.get("newPaymentAddress");
    return value!.toBytes();
  }

  set newPaymentAddress(value: Bytes) {
    this.set("newPaymentAddress", Value.fromBytes(value));
  }
}

export class ProxyCallContractUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("proxyCallContract", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ProxyCallContractUpdated entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ProxyCallContractUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ProxyCallContractUpdated", id.toString(), this);
    }
  }

  static load(id: string): ProxyCallContractUpdated | null {
    return changetype<ProxyCallContractUpdated | null>(
      store.get("ProxyCallContractUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proxyCallContract(): Bytes {
    let value = this.get("proxyCallContract");
    return value!.toBytes();
  }

  set proxyCallContract(value: Bytes) {
    this.set("proxyCallContract", Value.fromBytes(value));
  }
}

export class TokenCreatorPaymentAddressSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fromPaymentAddress", Value.fromBytes(Bytes.empty()));
    this.set("toPaymentAddress", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save TokenCreatorPaymentAddressSet entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenCreatorPaymentAddressSet entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenCreatorPaymentAddressSet", id.toString(), this);
    }
  }

  static load(id: string): TokenCreatorPaymentAddressSet | null {
    return changetype<TokenCreatorPaymentAddressSet | null>(
      store.get("TokenCreatorPaymentAddressSet", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fromPaymentAddress(): Bytes {
    let value = this.get("fromPaymentAddress");
    return value!.toBytes();
  }

  set fromPaymentAddress(value: Bytes) {
    this.set("fromPaymentAddress", Value.fromBytes(value));
  }

  get toPaymentAddress(): Bytes {
    let value = this.get("toPaymentAddress");
    return value!.toBytes();
  }

  set toPaymentAddress(value: Bytes) {
    this.set("toPaymentAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class TokenCreatorUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fromCreator", Value.fromBytes(Bytes.empty()));
    this.set("toCreator", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenCreatorUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenCreatorUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenCreatorUpdated", id.toString(), this);
    }
  }

  static load(id: string): TokenCreatorUpdated | null {
    return changetype<TokenCreatorUpdated | null>(
      store.get("TokenCreatorUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fromCreator(): Bytes {
    let value = this.get("fromCreator");
    return value!.toBytes();
  }

  set fromCreator(value: Bytes) {
    this.set("fromCreator", Value.fromBytes(value));
  }

  get toCreator(): Bytes {
    let value = this.get("toCreator");
    return value!.toBytes();
  }

  set toCreator(value: Bytes) {
    this.set("toCreator", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class TokenIPFSPathUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("indexedTokenIPFSPath", Value.fromString(""));
    this.set("tokenIPFSPath", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenIPFSPathUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save TokenIPFSPathUpdated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("TokenIPFSPathUpdated", id.toString(), this);
    }
  }

  static load(id: string): TokenIPFSPathUpdated | null {
    return changetype<TokenIPFSPathUpdated | null>(
      store.get("TokenIPFSPathUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get indexedTokenIPFSPath(): string {
    let value = this.get("indexedTokenIPFSPath");
    return value!.toString();
  }

  set indexedTokenIPFSPath(value: string) {
    this.set("indexedTokenIPFSPath", Value.fromString(value));
  }

  get tokenIPFSPath(): string {
    let value = this.get("tokenIPFSPath");
    return value!.toString();
  }

  set tokenIPFSPath(value: string) {
    this.set("tokenIPFSPath", Value.fromString(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("name", Value.fromString(""));
    this.set("createdAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("creator", Value.fromString(""));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get contentURI(): string | null {
    let value = this.get("contentURI");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contentURI(value: string | null) {
    if (!value) {
      this.unset("contentURI");
    } else {
      this.set("contentURI", Value.fromString(<string>value));
    }
  }

  get tokenIPFSPath(): string | null {
    let value = this.get("tokenIPFSPath");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenIPFSPath(value: string | null) {
    if (!value) {
      this.unset("tokenIPFSPath");
    } else {
      this.set("tokenIPFSPath", Value.fromString(<string>value));
    }
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get created(): Array<string> {
    let value = this.get("created");
    return value!.toStringArray();
  }

  set created(value: Array<string>) {
    this.set("created", Value.fromStringArray(value));
  }
}
