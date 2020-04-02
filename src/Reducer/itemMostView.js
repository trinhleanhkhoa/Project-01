
var initialState=[
    {
       id: 6,
        text1: 'Mauris Vel Tellus',
        text2: 'Fruits',
        text3: '48.00',
        text4: '$345.00',
        bgImg: 'bgImg',
        hinh:'https://caythuocdangian.com/wp-content/uploads/2019/03/cong-dung-cua-rau-mui-tay.jpg',
        quantity:1
      
       
    },
    {
       
        id: 7,
        text1: 'Nunc Neque Eros',
        text2: 'Fruits',
        text3: '45.00',
        text4: '$245.00',
        bgImg: 'bgImg2',
        hinh:'https://image.thanhnien.vn/500/uploaded/2014/saigonamthuc.thanhnien.com.vn/pictures201406/ngoclinh/cucaiduong-b.jpg',
        quantity:1
      
       
       
    },
    {
       
        id: 8,
        text1: 'Proin Lectus Ipsum',
        text2: 'Fruits',
        text3: '35.00',
        text4: '$145.00',
        bgImg: 'bgImg3',
        hinh:'https://iwthanoi.vn/wp-content/uploads/2020/01/dung-hanh-hoa-chua-benh-cham-lieu-co-tot-khong.jpg',
        quantity:1
 

       
    },
    {
        
        id: 9,
        text1: 'Quisque In Arcu',
        text2: 'Fruits',
        text3: '25.00',
        text4: '$235.00',
        bgImg: 'bgImg4',
        hinh:'https://znews-photo.zadn.vn/w660/Uploaded/sgorvz/2019_09_23/muop_dang.jpg',
        quantity:1

       
    },
    {  
        id: 10,
        text1: 'Cas Meque Metus',
        text2: 'Fruits',
        text3: '30.00',
        text4: '$255.00',
        bgImg: 'bgImg5',
        hinh:'https://hatgiongdalat.com/asset/upload/image/hat-giong-bap-cai-chiu-nhiet_(1).jpg?v=2019',
        quantity:1
       
    }
]
var itemMostView=(state=initialState,action)=>{

    switch(action.type){
      
       
        default: return state;//switch case phai co truong hop mac dinh
    }
}
export default itemMostView;