module.exports = function getArgvObject() {
    if (process.argv.length < 3) {
        return {};
    }

    let argvObject = {};

    const argvs = process.argv.slice(2)

    for (let index = 0, length = argvs.length; index < length; index++) {
        let param = argvs[index];
        let paramKV = param.split(/w*=(.*)/);
        argvObject[paramKV[0]] = paramKV[1];
    }

    return argvObject;
};