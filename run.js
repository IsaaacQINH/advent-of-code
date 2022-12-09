const run = async (exec) => {
    try {
        await exec();
    } catch (e) {
        console.error(e);
    }
}

module.exports = { run };