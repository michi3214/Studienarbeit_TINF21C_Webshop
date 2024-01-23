/**
 * Render About page
 *
 * @async
 * @param {HTTP request} req
 * @param {HTTP response} res
 */
async function getPage(req: Request, res: Response){
	res.render("layout.pug");
	
}

module.exports =  {
	getPage,
};