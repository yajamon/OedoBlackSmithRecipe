/// <reference path="Item.ts" />
/// <reference path="Spec.ts" />

class EquipmentItem extends Item {
    private spec: Spec;
    private smith_worth: Worth;

    constructor(information:Information, shop_worth:Worth, spec:Spec, smith_worth:Worth) {
        super(information, shop_worth);
        this.spec = spec;
        this.smith_worth = smith_worth;
    }
}
