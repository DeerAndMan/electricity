import Vue from 'vue'
import {
    Container,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Dialog,
    Select,
    Option,
    Header,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Main,
    MessageBox,
    Icon,
    Button,
    Row, Col,
    Message,
    Radio, RadioGroup, RadioButton,
    Table,
    TableColumn,
    Transfer,
    DatePicker,
    Popover,
    Popconfirm,
    Form,
    FormItem,
    Input,
    InputNumber,
    Cascader,
    Drawer,
    Loading,
    Empty,
} from 'element-ui'

import 'element-ui/lib/theme-chalk/base.css';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Container);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(Header);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Main);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Transfer);
Vue.use(DatePicker);
Vue.use(Popover);
Vue.use(Popconfirm);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Cascader);
Vue.use(Drawer);
Vue.use(Loading.directive);
Vue.use(Empty);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;