const ItemsServices = require('../services/itemServices');
const CategoryService = require('../services/categoryService');
const LicenceService = require('../services/licenceService');



module.exports = {
  adminView: async (req, res) => {
    const { data } = await ItemsServices.getAllItems();
    res.render( './admin/admin',
    {
      view: {
        title: 'List of Products | Admin Funkoshop'
      },
      items: data
    });
  },
      
  createView: async (req, res) => {
    const { data: categories } = await CategoryService.getAllItemsCategories();
    const { data: licences } = await LicenceService.getAllItemsLicences();

    res.render('./admin/create', {
      view: {
        title: 'Create Product | Admin Funkoshop'
      },
      categories,
      licences        
    });
  },
  createItem:  async (req, res) => {
    const item = req.body;
    const files = req.files;
    await itemServices.create(item, files);
    res.redirect('/admin');
  },
  bulkCreate:  async (req, res) => {
    const items = req.body;
    const result = await ItemsServices.create(items.map(el => Object.values(el)));
    res.send(result);
  },
  editView:  async (req, res) => {
    const id = req.params.id;
    const { data: categories } = await CategoryService.getAllItemsCategories();
    const { data: licences } = await LicenceService.getAllItemsLicences();
    const { data } = await ItemsServices.getItem(id);
    console.log(categories, licences);
    res.render('./admin/edit', {
      view: {
        title: `Edit Product #${id} | Admin Funkoshop`
      },
      item: data[0],
      categories,
      licences
    });
  },
  editItem:  async (req, res) => {
    const id = req.params.id;
    const item = req.body;

    await ItemsServices.edit(item, id);
    res.redirect('/admin');
  },
  deleteItem:  async (req, res) => {
    const id = req.params.id;

    await ItemsServices.delete(id);
    res.redirect('/admin');
  },
};

   
    