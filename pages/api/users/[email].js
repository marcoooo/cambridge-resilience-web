import prisma from '../../../prisma/client';

export default async function (req, res) {
	try {
		const { email } = req.query;

		const user = await prisma.user.findUnique({
			where: { email },
		});
		res.status(200);
		res.json({ user });
	} catch (e) {
		res.status(500);
		res.json({
			error: `Unable to get user from database - ${e}`,
		});
	}
}
