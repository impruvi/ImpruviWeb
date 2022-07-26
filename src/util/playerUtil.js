export const hasPlayerCompletedQuestionnaire = (player) => {
    // currently the only place the position can be populated is from the questionnaire
    return !!player && !!player.position;
}