"use strict";

exports.mod = () => {
    if (!serverConfig.rebuildCache) {
        return;
    }

    logger.logInfo("Caching: Life-AllQuestFinished");

    let base = fileIO.readParsed("user/cache/quests.json");

    for (let data of base.data) {
        data.min_level = 1;
        data.conditions.AvailableForFinish = [];
    }

    fileIO.write("user/cache/quests.json", base);
    logger.logSuccess("[MOD] AllQuestFinished; Applied")
}