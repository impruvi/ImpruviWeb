export const EquipmentType = {
    Ball: 'BALL',
    Cone: 'CONE',
    Goal: 'GOAL',
    Space: 'SPACE',
    AgilityLadder: 'AGILITY_LADDER'
}

export const getEquipmentTypeDisplayValue = (equipmentType) => {
    if (!equipmentType) {
        return null;
    }
    if (equipmentType === EquipmentType.Ball) {
        return 'ball'
    } else if (equipmentType === EquipmentType.Cone) {
        return 'cones'
    } else if (equipmentType === EquipmentType.Goal) {
        return 'goal'
    } else if (equipmentType === EquipmentType.AgilityLadder) {
        return 'agility ladder'
    }
}