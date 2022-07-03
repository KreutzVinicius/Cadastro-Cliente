1. Run on cmd
 yarn add typescript ts-node-dev @types/express prisma -D
   yarn add express  @prisma/client express-async-errors bcrypt

2. create archive tsconfi.json
{
    "compilerOptions": {
        "sourceMap": true,
        "outDir": "dist",
        "strict": true,
        "lib": [
            "esnext"
        ],
        "esModuleInterop": true
    }
}

3.  yarn prisma init
    yarn prisma migrate dev 
    yarn dev 