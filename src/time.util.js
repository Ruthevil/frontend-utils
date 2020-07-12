/**
 * Created by 86185 in 2020/7/11 on 10:44
 */
class TimeUtil {
    constructor() {
    }

    /**
     * 获取年份
     * @param time
     * @return {number}
     */
    getYear(time = new Date()) {
        return time.getFullYear()
    }

    /**
     * 获取月份
     * @param time
     * @param fillFlag
     * @return {*}
     */
    getMonth(time = new Date(), fillFlag = true) {
        let month = time.getMonth() + 1;
        return fillFlag && month < 10 ? `0${month}` : month
    }

    /**
     * 获取日
     * @param time
     * @param fileFlag
     * @return {*}
     */
    getDay(time = new Date(), fileFlag = true) {
        let day = time.getDate();
        return fileFlag && day < 10 ? `0${day}` : day
    }

    /**
     * 获取星期
     * @param time
     * @return {number}
     */
    getWeekDay(time = new Date()) {
        return time.getDay()
    }

    /**
     * 获取某个月的天数，默认当前月的天数
     * @param year
     * @param month
     * @return {number}
     */
    getMonthDays(year = new Date().getFullYear(), month = new Date().getMonth()) {
        let date = new Date(year, month, 0);
        return date.getDate()
    }

    /**
     * 获取格式化时间，默认yyyy-MM-dd hh:mm:ss
     * @param time
     * @param separator
     * @return {string}
     */
    getFormatTime(time = new Date(), separator = "-") {
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let second = time.getSeconds();
        let arr = [month, day, hours, minutes, second];
        arr.forEach((item, index) => {
            arr[index] = item < 10 ? '0' + item : item
        });
        return `${year}${separator}${month}${separator}${day} ${hours}:${minutes}:${second}`
    }

    /**
     * 时间戳转化为时间对象并格式化
     * @param timeStamp
     * @param separator
     * @return {string}
     */
    timeStampToFormat(timeStamp = new Date().getTime(), separator = "-") {
        return this.getFormatTime(new Date(timeStamp), separator)
    }

    /**
     * 时间字符串转换为时间戳
     * @param timeStr yyyy/mm/dd 或 yyyy-mm-dd 或 yyyy-mm-dd hh:mm 或 yyyy-mm-dd hh:mm:ss
     * @return {number}
     */
    formatToTimeStamp(timeStr) {
        return new Date(timeStr.replace(/-/g, "/")).getTime()
    }

    /**
     * 比较时间
     * @param timeStr1 yyyy/mm/dd 或 yyyy-mm-dd 或 yyyy-mm-dd hh:mm 或 yyyy-mm-dd hh:mm:ss
     * @param timeStr2 yyyy/mm/dd 或 yyyy-mm-dd 或 yyyy-mm-dd hh:mm 或 yyyy-mm-dd hh:mm:ss
     * @return {boolean}
     */
    compareTime(timeStr1, timeStr2) {
        return new Date(timeStr1.replace(/-/g, "-")).getTime() < new Date(timeStr2.replace(/-/g, "-")).getTime()
    }
}

export default new TimeUtil()
