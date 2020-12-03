export default new class Configs{
    public host= "";
    public port = 587;
    public user = process.env.EMAIL;
    public password = process.env.EMAIL_PASS;
}