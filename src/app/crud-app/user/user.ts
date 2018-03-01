export class User {

  id: string;
  name: string;
  mobile: string;
  address: string;
  isSelected: boolean;
  show: boolean;
  edit: boolean;

  constructor (name?: string, mobile?: string, address?: string) {
    this.name = name;
    this.mobile = mobile;
    this.address = address;
    this.isSelected = false;
    this.show = false;
    this.edit = false;
  }

  uuid () {

    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  toggleIsSelected () {

    this.isSelected = !this.isSelected;
  }

  toggleHide () {

    this.edit = false;
    this.show = !this.show;
  }

  toggleEdit () {

    this.show = false;
    this.edit = !this.edit;
  }

  addIdBeforeSave () {

    this.id = this.uuid();
  }
}
