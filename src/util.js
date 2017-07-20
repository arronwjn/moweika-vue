/**
 * Created by macbook on 2017/7/11.
 */

const baseUrl = 'http://movie.kaituo.local/';

export default {
  formatImg(imgUrl, allowCache) {
    if (imgUrl) {
      imgUrl = imgUrl.split(',')[0];
      if (imgUrl.indexOf('http') !== 0) {
        imgUrl = baseUrl + imgUrl;
      }
    } else {
      imgUrl = '../static/images/banner.jpg';
    }

    if (!allowCache) {
      return imgUrl;
    } else {
      return imgUrl + '?' + Math.random();
    }
  },
  //四舍五入方法
  fomatFloat(src,pos){
  return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
}
}
