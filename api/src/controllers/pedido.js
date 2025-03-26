const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const { clienteId, data, produto, qtd, preco, subTotal } = req.body;
    const pedido = await prisma.pedido.create({
        data: {
            clienteId,
            data,
            produto,
            qtd,
            preco,
            subTotal
        }
    });
    res.status(201).json(pedido).end();
}

const read = async (req, res) => {
    const pedidios = await prisma.pedido.findMany();
    res.json(pedidios);
}

const update = async (req, res) => {
    try {
        const pedido = await prisma.pedido.update({
            data: req.body,
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(202).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

const remove = async (req, res) => {
    try {
        const pedido = await prisma.pedido.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(204).json(pedido).end();
    } catch (e) {
        res.status(400).json(e).end();
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}