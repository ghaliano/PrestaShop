module.exports = {
  CategorySubMenu: {
    submenu: '//*[@id="subtab-AdminCategories"]/a',
    new_category_button: '//a[@id="page-header-desc-configuration-add"]',
    name_input: '//*[@id="category_name_1"]',
    description_textarea: '//textarea[@id="category_description_1"]',
    picture: '//*[@id="category_cover_image"]',
    thumb_picture: '//*[@id="category_thumbnail_image"]',
    thumb_menu_picture: '//*[@id="category_menu_thumbnail_images"]',
    upload_files_button: '//*[@id="thumbnail-upload-button"]',
    thumbnail_success_alert: '//*[@id="thumbnail-success"]',
    thumbnail_menu_img: '//*[@id="thumbnail-images-thumbnails"]//img',
    title: '//*[@id="category_meta_title_1"]',
    meta_description: '//*[@id="category_meta_description_1"]',
    keyswords: '//*[@id="category_meta_keyword_1-tokenfield"]',
    simplify_URL_input: '//*[@id="category_link_rewrite_1"]',
    save_button: '//form[@name="category"]//*[contains(@class,"card-footer")]/button',
    reset_button: '//*[@id="category_grid"]//thead//button[@type="reset"]',
    search_input: '//input[@id="category_name"]',
    search_button: '//button[@name="category[actions][search]"]',
    search_result: '//*[@id="category_grid"]//td[3]',
    update_button: '//*[@id="category_grid"]//tbody//a[@data-original-title="Edit"]',
    action_button: '//*[@id="category_grid"]//td[7]//a[@data-toggle="dropdown"]',
    delete_button: '//*[@id="category_grid"]//td[7]//a[contains(@class,"delete-category")]',
    view_button: '//*[@id="category_grid"]//td[7]//a[@data-original-title="View"]',
    image_link: '//form[@name="category"]//label[contains(text(),"Category cover image")]/..//figure/img',
    thumb_link: '//form[@name="category"]//label[contains(text(),"Category thumbnail")]/..//figure/img',
    second_delete_button: '//div[@class="modal-footer"]//button[contains(@class,"submit-delete-categories")]',
    select_category: '//*[@id="category_grid"]//tbody/tr/td//input[@type="checkbox"]/../..',
    action_group_button: '//*[@id="category_grid"]//button[contains(@class, "dropdown-toggle")]',
    delete_action_group_button: '//*[@id="category_grid_bulk_action_delete_selection"]',
    category_number_span: '//*[@id="category_grid_panel"]//h3',
    category_description: '//textarea[@id="category_description_1"]',
    description: '//*[@id="category_grid"]//td[4]',
    delete_tag_button: '//div[@class="token"][%POS]/a',
    mode_link_disable_radio: '//*[@id="delete_categories_delete_mode_0"]/..',
    mode_link_radio: '//*[@id="delete_categories_delete_mode_1"]/..',
    mode_delete_radio: '//*[@id="delete_categories_delete_mode_2"]/..',
    expand_all_button: '#expand-all-categories-tree',
    parent_category: '(//*[@id="categories-tree"]//span[contains(.,"%NAME")]//input)[1]',
    search_no_results: '//*[@id="category_grid"]//tbody/tr/td//p[2]',
    category_name: '//*[@id="table-category"]//tr[%ID]//td[3]',
    category_view_button: '//*[@id="table-category"]//tr[%ID]//td[7]//a[@title="View"]',
    category_id_column:'//*[@id="table-category"]//tr[%ID]//td[2]',

  }
};
