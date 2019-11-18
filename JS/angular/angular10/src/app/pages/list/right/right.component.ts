import {
  Component,
  OnInit
} from '@angular/core';
//路由模块跳转
import {
  Router,
  ActivatedRoute
} from '@angular/router';

//服务
import {
  ServiceService
} from '../../../module/log/service.service';

//引入自定义管道模块常量
import {
  status,
  type,
} from '../../../../pipes/pipes/app.constant';


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
 public loading:boolean;
  //搜索
  public id: any;

  public listOfData = [];
  public total: any;
  public size: any;
  public page: any;
  //下拉框数值
  public typeNz: any;
  params: any = {};
  //状态值改变
  public status: any;
  public types: any
  //日历
  //开始事件
  public time: any;
  public nTime: any;
  //结束时间
  public times: any;
  public nTimes: any;
  //查看状态
  public sss: any;

  //分页赋值
  public paGe: any;


  constructor(
    public cs: ServiceService,
    public route: Router,
    public aRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    //列表查询管道数值
    this.status = status.line;
    //类型选择器管道数值
    this.types = type.types;
    //a 获取的值是分页数值
    this.aRoute.queryParamMap.subscribe(a => {
      this.getRight(a);
      this.paGe = a;
      console.log(this.paGe);

    });
  }
//退出

quit(){
  this.route.navigate(["/log"])
  window.sessionStorage.removeItem("auth");
}


  //get参数
  getRight(params ? : any) {
    //这就是通过get请求到的参数
    this.loading=true;
    params && (this.params = Object.assign(this.params, params.params)); //对象拼接
    params && (this.typeNz = params.params.type);
    console.log(this.params)

    this.cs.get(this.params).subscribe((response: any) => {
     
      this.listOfData = response.data.articleList;
      // console.log(this.listOfData);
      this.total = response.data.total;
      this.size = response.data.size;

      this.loading=false;
    });
   
  };
  //分页点击回调后台数据
  pageIndexChange() {

    this.params = {
      page: this.page
    };
    //Object对象拼接
    this.paGe = JSON.parse(JSON.stringify(this.paGe))
    this.params = Object.assign(this.paGe.params, this.params);


    console.log(this.params);
    this.route.navigate(["/list/right"], {
      queryParams: this.params,
    });
 

  };

  //搜索类型返回的值
  seekType() {
    //算元表达式，来进行判断this.time判断这个是否存在，存在就把new Date(this.time).valueOf()值 赋给它不然就是后面的空值赋给他
    this.nTime = this.time ? new Date(this.time).valueOf() : "";
    this.nTimes = this.times ? new Date(this.times).valueOf()+86399999 : "";
    if (this.typeNz == undefined) {
      this.typeNz = "";
    }
    if (this.sss == null) {
      this.sss = ""
    }
    this.params = {
      type: this.typeNz,
      startAt: this.nTime,
      endAt: this.nTimes,
      status: this.sss,
    }
    console.log(this.params.startAt);
    console.log(this.params.endAt);
    console.log(this.params.type);
    this.route.navigate(["/list/right"], {
      queryParams: this.params,
    });
  }
  //清空
  empty() {
    this.params = {
      type: '',
      startAt: '',
      endAt: '',
      status: '',
    }
    this.sss = "";
    this.typeNz = '';
    this.time="";
    this.times="";

    this.route.navigate(["/list/right"], {
      queryParams: this.params,
    });

  

  }
  //修改
  putData(e) {
   
    if (e.status === 1) {
      this.status = 2;
    }
    if (e.status === 2) {
      this.status = 1;
    }
   
    this.cs.putData({id: e.id,
      status: this.status,}).subscribe(((rul:any) => {
      console.log(rul);
   
    if(rul.code === 0){
      this.getRight();

    }
    }));

   
    
  

    
  }
  //编辑
  compile(e){
        this.params = {
          id:e.id
        }
   
   console.log(e);
 
   this.route.navigate(["/list/compile"],{
    queryParams: this.params,
   });
  }
  //删除
  delete(data){
    this.cs.deleteData(data.id).subscribe((rul:any)=>{
 
   
      if(rul.code === 0){
        this.getRight();
  
      }

    });
  }
}