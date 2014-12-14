/// <reference path="Item.ts" />
/// <reference path="Spec.ts" />

class EquipmentItem extends Item {
    private spec: Spec;

    constructor(information:Information, shop_price:Worth, spec:Spec) {
        super(information, shop_price);
        this.spec = spec;
    }
}
