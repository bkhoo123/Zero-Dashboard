const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const {email, password} = req.body;

    const user = await prisma.user.findFirst({
        where: { email }, 
    });

    if (user && password === user.password) {
        res.status(200).json({ message: "Login successful!" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
}