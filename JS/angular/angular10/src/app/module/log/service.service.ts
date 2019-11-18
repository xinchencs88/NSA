import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url: string = '/a/login';
  //文档数据接口
  right: string = '/a/article/search';
  //新增网页
  compile: string = '/a/u/article';
  //查询接口
  id: string = '/a/u/article/';
  //新增接口
  add: string = '/a/u/article';
  //上下架
  put: string = '/a/u/article/status';
  //编辑个人s数据接口
  person:string = '/a/article';
  //编辑接口
  compiles:string = '/a/u/article';
  //删除数据
  delete:string = ' /a/u/article';
  constructor(
    private http: HttpClient
  ) {}
  //删除
  deleteData(id){
    return this.http.delete(`${this.delete}/${id}`)
  }
  //编辑接口
  compilesData(id,data){
    const cs = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
    return this.http.put(`${this.compiles}/${id}`,cs,{
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    })
  }
  //编辑个人数据
  personData(id){
    return this.http.get(`${this.person}/${id}`);
  }
  //修改数据
  putData(data) {
    const cs = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
    return this.http.put(this.put, cs,{
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
      
    });
    
  }
  //get数据传递文档传递
  get(params) {
    return this.http.get(this.right, {
      params: params
    });
  }

  //增加数据
  postA(data) {
    const cs = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
    return this.http.post(this.add, cs, {

      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    });

  }


  login(data) {
    const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.paramFormat(data) : data;
    return this.http.post(this.url, params, {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    });
  }
  // 序列化参数
  paramFormat(data: any) {
    let paramStr = '',
      name, value, subName, innerObj;
    let that = this;
    for (name in data) {
      value = data[name];
      if (value instanceof Array) {
        for (let i of value) {
          subName = name;
          innerObj = {};
          innerObj[subName] = i;
          paramStr += this.paramFormat(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        Object.keys(value).forEach(function (key) {
          subName = name + '[' + key + ']';
          innerObj = {};
          innerObj[subName] = value[key];
          paramStr += that.paramFormat(innerObj) + '&';
        });
      } else if (value !== undefined && value !== null) {
        paramStr += encodeURIComponent(name) + '=' +
          encodeURIComponent(value) + '&';
      }
    }
    return paramStr.length ? paramStr.substr(0, paramStr.length - 1) : paramStr;
  }
}