const env = {
    PORT: process.env.PORT as string,
    MONGO_URL: process.env.MONGO_URL as string,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY as string,
    BASE_URL: process.env.BASE_URL as string,
};

export { env };
