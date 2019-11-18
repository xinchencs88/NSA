import {
  Component,
  OnInit
} from '@angular/core';

import {
  UploadFile
} from 'ng-zorro-antd/upload'

import {
  type,
  industry,
} from '../../../../pipes/pipes/app.constant';
//服务
import {
  ServiceService
} from '../../../module/log/service.service';
//路由
import {
  ActivatedRoute,
  Route,
  Router
} from '@angular/router';


import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-compile',
  templateUrl: './compile.component.html',
  styleUrls: ['./compile.component.scss']
})
export class CompileComponent implements OnInit {
  public compile: any = {
    img: [{
      url: ''
    }],
  };
  //ID
  public id: any;
  //个人参数
  public data: any;
  //表单验证
  Form: FormGroup;

  //输入框

  public content: any;
  public url: any;

  //下拉框状态值
  public type: any;
  //分支下拉框
  public industry: any;

  //配图
  previewImage: string | undefined = '';
  previewVisible = false;
  //增加
  public article: any = {
    title: '',
    type: '',
    status: '',
    img: [],
    content: '',
    url: '',
    industry: '',
  }
  //进行点击判断只能点击一次
  public disable:Boolean =false;


  
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };


  constructor(
    public cs: ServiceService,
    public router: Router,
    public activated: ActivatedRoute,
  ) {}

  ngOnInit() {
   
    //生命周期
    this.type = type.types; //管道
    this.industry = industry.industryType;

    this.activated.queryParamMap.subscribe((a: any) => {
      //编辑ID
      console.log(a.params.id);
      if (a.params.id == undefined) {
        console.log('编辑')

      } else {

        console.log('编辑成功')
        this.id = a.params.id
        this.cs.personData(this.id).subscribe(((rul: any) => {
          this.article = rul.data.article
          console.log( rul.data.article);

          this.compile = {
            type: rul.data.article.type.toString(),
            industry: rul.data.article.industry.toString(),
            img: [{
              url: rul.data.article.img
            }],

          }
          this.article = Object.assign(this.article, this.compile);
          console.log(typeof this.article.type);
        }));
      }

    })





  }
//清除
quit(){
  this.router.navigate(["/log"])
  window.sessionStorage.removeItem("auth");
}


  //图片回调
  change(girl) {
    if (girl.type == "success") {
      this.article.img[0] = girl.file.response.data;
      console.log(this.article);
      console.log("成功");
    }

    console.log(girl);


  }

  //上线
  click() {
    this.disable = true;
    //重新开辟一个内存
    console.log(this.article.img)
    let params = JSON.parse(JSON.stringify(this.article));
    console.log(params);
    //把图片转换成字符串符合后台数据
    params.img = params.img[0].url;
    params.status = 2;

    //判断是否是增加还是编辑
    if (this.id) {
      this.cs.compilesData(this.id, params).subscribe((res: any) => {
       if(res.code ==!0 ){
        this.disable = false;
       }
        this.router.navigate(["/list/right"])
       
      })

    } else {
      this.cs.postA(params).subscribe((res: any) => {
        if(res.code ==!0 ){
          this.disable = false;
         }
        this.router.navigate(["/list/right"])

      });
    }

  }


  //草稿
  draft() {
    //重新开辟一个内存
    let params = JSON.parse(JSON.stringify(this.article));
    //把图片转换成字符串符合后台数据
    params.img = params.img[0].url;
    params.status = 1;
    //判断是否是增加还是编辑
    if (this.id) {
      //编辑
      this.cs.compilesData(this.id, params).subscribe((res: any) => {
        console.log(res.content);
        this.router.navigate(["/list/right"])

      })

    } else {
      //增加
      this.cs.postA(params).subscribe((res: any) => {
        console.log(res.content);
        this.router.navigate(["/list/right"])

      });
    }

  }
  //取消
  cancel(){
     window.history.back();
  }

}