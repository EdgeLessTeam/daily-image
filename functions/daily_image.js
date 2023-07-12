addEventListener('fetch', event => {
    handleEvent0(event);
});

// single redirect(without keepalive)
function handleEvent0(event) {
    fetch("http://open.iciba.com/dsapi", {
        headers: {
            "Transfer-Encoding": "chunked",
        },
        redirect: "follow",
        maxFollow: 2,
        timeoutSetting: {
            connectTimeout: 6000,
        }
    }).then(resp => {
        log("redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }

        event.respondWith(resp);
    });
}

// single redirect(with keepalive)
function handleEvent1(event) {
    fetch("http://open.iciba.com/dsapi", {
        headers: {
            Connection: "keep-alive",
        },
        redirect: "follow",
        maxFollow: 2,
    }).then(resp => {
        log("redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }

        event.respondWith(resp);
    });
}

// multiple redirect
function handleEvent2(event) {
    fetch("https://www.httpbin.org/redirect/301", {
        redirect: "follow",
        maxFollow: 64,
    }).then(resp => {
        log("redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
        event.respondWith(resp);
    });
}

// addr is domain
function handleEvent3(event) {
    fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i57j69i60j69i61j69i60j69i65j69i60l2.559j0j1&sourceid=chrome&ie=UTF-8", {
        redirect: "follow",
        maxFollow: 1,
        version: "HTTP/2.0",
        headers: {
            Host: "www.google.com",
        }
    }).then(resp => {
        let headers = resp.headers;
        for (let pair of headers.entries()) {
            log(pair[0] + " = " + pair[1]);
        }
        event.respondWith(resp);
    })
}

// addr is IPv4
function handleEvent4(event) {
    fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i57j69i60j69i61j69i60j69i65j69i60l2.559j0j1&sourceid=chrome&ie=UTF-8", {
        redirect: "follow",
        maxFollow: 1,
        version: "HTTP/2.0",
        headers: {
            Host: "www.google.com",
        }
    }).then(resp => {
        let headers = resp.headers;
        for (let pair of headers.entries()) {
            log(pair[0] + " = " + pair[1]);
        }
        event.respondWith(resp);
    })
}

// addr is IPv6
function handleEvent6(event) {
    fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i57j69i60j69i61j69i60j69i65j69i60l2.559j0j1&sourceid=chrome&ie=UTF-8", {
        redirect: "follow",
        maxFollow: 1,
        version: "HTTP/2.0",
        headers: {
            Host: "www.google.com",
        }
    }).then(resp => {
        let headers = resp.headers;
        for (let pair of headers.entries()) {
            log(pair[0] + " = " + pair[1]);
        }
        event.respondWith(resp);
    })
}

// redirect: POST (method changes)
function handleEvent7(event) {
    fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i57j69i60j69i61j69i60j69i65j69i60l2.559j0j1&sourceid=chrome&ie=UTF-8", {
        redirect: "follow",
        maxFollow: 1,
        version: "HTTP/2.0",
        headers: {
            Host: "www.google.com",
        }
    }).then(resp => {
        let headers = resp.headers;
        for (let pair of headers.entries()) {
            log(pair[0] + " = " + pair[1]);
        }
        event.respondWith(resp);
    })
}

// redirect: POST (method not change)
function handleEvent8(event) {
    fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i57j69i60j69i61j69i60j69i65j69i60l2.559j0j1&sourceid=chrome&ie=UTF-8", {
        redirect: "follow",
        maxFollow: 1,
        version: "HTTP/2.0",
        headers: {
            Host: "www.google.com",
        }
    }).then(resp => {
        let headers = resp.headers;
        for (let pair of headers.entries()) {
            log(pair[0] + " = " + pair[1]);
        }
        event.respondWith(resp);
    })
}

// redirect: POST (method not change)
function handleEvent9(event) {
    fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i57j69i60j69i61j69i60j69i65j69i60l2.559j0j1&sourceid=chrome&ie=UTF-8", {
        redirect: "follow",
        maxFollow: 1,
        version: "HTTP/2.0",
        headers: {
            Host: "www.google.com",
        }
    }).then(resp => {
        let headers = resp.headers;
        for (let pair of headers.entries()) {
            log(pair[0] + " = " + pair[1]);
        }
        event.respondWith(resp);
    })
}

// run multiple request 
function handleEvent10(event) {
    fetch("http://open.iciba.com/dsapi", {
        redirect: "follow",
        maxFollow: 2,
    }).then(resp => {
        log("fetch-1 redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
    });

    fetch("http://open.iciba.com/dsapi", {
        redirect: "follow",
        maxFollow: 2,
    }).then(resp => {
        log("fetch-2 redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
        event.respondWith(resp);
    });
}

// multiple request with multiple redirect
function handleEvent11(event) {
    fetch("https://www.httpbin.org/redirect/301", {
        redirect: "follow",
        maxFollow: 512,
    }).then(resp => {
        log("fetch-1 redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
    });

    fetch("https://www.httpbin.org/redirect/301", {
        redirect: "follow",
        maxFollow: 512,
    }).then(resp => {
        log("fetch-2 redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
        event.respondWith(resp);
    });
}

// multiple request(one direct the other not)
function handleEvent12(event) {
    fetch("http://open.iciba.com/dsapi", {
        redirect: "follow",
        maxFollow: 2,
    }).then(resp => {
        log("fetch-1 redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
        return resp.json();
    }).then(data => {
        log("fetch-1 content: ", data.content)
    });

    fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i60j69i61j69i60.1030j0j1&sourceid=chrome&ie=UTF-8", {
        redirect: "follow",
        maxFollow: 1,
        version: "HTTP/2.0",
        headers: {
            Host: "www.google.com",
        }
    }).then(resp => {
        log("fetch-2 redirected: ", resp.redirected);
        event.respondWith(resp);
    })
}

// multiple request(two direct the other not)
function handleEvent13(event) {
    fetch("http://open.iciba.com/dsapi", {
        redirect: "follow",
        maxFollow: 2,
    }).then(resp => {
        log("fetch-1 redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
        return resp.json();
    }).then(data => {
        log("fetch-1 content: ", data.content)
    });

    fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i60j69i61j69i60.1030j0j1&sourceid=chrome&ie=UTF-8", {
        redirect: "follow",
        maxFollow: 1,
        version: "HTTP/2.0",
        headers: {
            Host: "www.google.com",
        }
    }).then(resp => {
        log("fetch-2 redirected: ", resp.redirected);
        event.respondWith(resp);
    })

    fetch("http://open.iciba.com/dsapi", {
        redirect: "follow",
        maxFollow: 2,
    }).then(resp => {
        log("fetch-3 redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
        return resp.json();
    }).then(data => {
        log("fetch-3 content: ", data.content)
    });
}

// chain fetch call through JS future&promise
function handleEvent14(event) {
    fetch("http://open.iciba.com/dsapi", {
        redirect: "follow",
        maxFollow: 2,
    }).then(resp => {
        log("fetch-1 redirected: ", resp.redirected);
        for (let url of resp.redirectUrls) {
            log("url: ", url);
        }
        return fetch("https://www.google.com/search?q=laputa&oq=laputa&aqs=chrome.0.69i59j69i60j69i61j69i60.1030j0j1&sourceid=chrome&ie=UTF-8", {
            redirect: "follow",
            maxFollow: 1,
            version: "HTTP/2.0",
            headers: {
                Host: "www.google.com",
            }
        })
    }).then(resp => {
        log("fetch-2 redirected: ", resp.redirected);
        event.respondWith(resp);
    });
}
