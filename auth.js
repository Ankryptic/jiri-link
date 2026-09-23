import NextAuth from "next-auth";

import clientPromise from "./lib/mongodb";

export const authOptions = {
    providers: [

    ],
    session: {
        strategy: "database"
    },

}

export default NextAuth(authOptions)