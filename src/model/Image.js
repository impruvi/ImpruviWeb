class Image {

    file = null;
    src = null;
    isUploadedLocally = false;
    timestamp = 0;

    constructor(file, src, isUploadedLocally, timestamp) {
        this.file = file;
        this.src = src;
        this.isUploadedLocally = isUploadedLocally;
        this.timestamp = timestamp;
    }
}

export default Image;