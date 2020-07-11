/**
 * Created by 86185 in 2020/7/11 on 10:42
 */
class FileUtil {
    constructor() {
    }

    /**
     * 格式化文件单位
     * @param value
     * @return {string} 文件大小(kb)
     */
    formatFileSize(value) {
        let i, unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
        for (i = 0; i < unit.length && size >= 1024; i++) {
            value /= 1024
        }
        return (Math.round(value * 100) / 100 || 0) + unit[i]
    }

}

export default new FileUtil()
