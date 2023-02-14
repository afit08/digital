const config = {
    env: process.env.NODE_ENV || 'development',
    port: 3001,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    db_name : "backenddb",
    db_username : "postgres",
    db_password: "admin",
    URL_DOMAIN : '/backend',
    URL_IMAGE : '/backend/images/',
    URL_API : '/backend/api',
    UPLOAD_DIR : '/storages'
  }
  
export default config