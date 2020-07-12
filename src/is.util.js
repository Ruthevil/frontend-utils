/**
 * Created by 86185 in 2020/7/11 on 10:42
 */
class IsUtil {
    constructor() {
    }

    /**
     * 判断是否是数字
     * @param value
     * @return {boolean}
     */
    isNumber(value = "") {
        return /^\d{1,}$/g.test(value)
    }

    /**
     * 判断是否是字母
     * @param value
     * @return {boolean}
     */
    isLetter(value = "") {
        return /^[a-zA-Z]+$/g.test(value)
    }

    /**
     * 判断是否全部是小写字母
     * @param value
     * @return {boolean}
     */
    isLowercaseLetter(value = "") {
        return /^[a-z]+$/g.test(value)
    }

    /**
     * 判断是否全部是大写字母
     * @param value
     * @return {boolean}
     */
    isUppercaseLetter(value = "") {
        return /^[A-Z]+$/g.test(value)
    }

    /**
     * 判断是否是数字或字母
     * @param value
     * @return {boolean}
     */
    isNumberOrLetter(value = "") {
        return /^[0-9a-zA-Z]+$/g.test(value)
    }

    /**
     * 判断是否是字母和数字的组合
     * @param value
     * @return {boolean}
     */
    isNumberAndLetter(value = "") {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/g.test(value)
    }

    /**
     * 判断是否是中文
     * @param value
     * @return {boolean}
     */
    isChinese(value = "") {
        return /^[\u4E00-\u9FA5]+$/g.test(value)
    }

    /**
     * 判断是否是中文、数字、字母
     * @param value
     * @return {boolean}
     */
    isChineseNumberLetter(value = "") {
        return /^[0-9a-zA-Z\u4E00-\u9FA5]+$/g.test(value)
    }

    /**
     * 判断是否是邮箱
     * @param value
     * @return {boolean}
     */
    isEmail(value = "") {
        const reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
        return reg.test(value)
    }

    /**
     * 判断是否是手机号
     * @param value
     * @return {boolean}
     */
    isPhone(value = "") {
        return /^((\+|00)86)?1[3-9]\d{9}$/g.test(value)
    }

}

export default new IsUtil()
