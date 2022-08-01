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
        return 'Ball'
    } else if (equipmentType === EquipmentType.Cone) {
        return 'Cones'
    } else if (equipmentType === EquipmentType.Goal) {
        return 'Goal'
    } else if (equipmentType === EquipmentType.AgilityLadder) {
        return 'Agility ladder'
    }
}