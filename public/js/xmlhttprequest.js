 class XMLHttpRequestClass {

    constructor(options) {
        this.url = options.url;
        this.body = options.body;
        this.method = options.method;
    }

   api() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(this.method,this.url);
            xhr.responseType = 'json';
            if (this.method === "POST") {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            }

            xhr.onload = () => {
                if (xhr.status >= 400) {
                    reject(xhr.response);
                } else {
                    resolve(xhr.response);
                }
            }
            xhr.onerror = () => {
                reject(xhr.response);
            }
            xhr.send(this.body);
        });
    }
}

export {XMLHttpRequestClass}







