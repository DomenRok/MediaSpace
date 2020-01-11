import * as proxy from 'http-proxy-middleware';

module.exports = (app: any) => {
    app.use(
        "/api",
        (proxy as any)({
            target: "http://localhost:8000",
            changeOrigin: true
        })
    );
};