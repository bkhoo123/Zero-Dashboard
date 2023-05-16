const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function handler (req, res) {
    const {name, email, password} = req.body;

    try {
        const existingUser = await prisma.user.findFirst({
            where: {email},
        })
    
        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            })
        }
    
        const newUser = await  prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        
        res.status(201).json({message: "User created successfully", user: newUser})
    } catch (error) {
        console.error("Error creating user", error);
        res.status(500).json({message: "Error creating user", error: error.message})
    }

}