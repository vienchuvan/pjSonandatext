 // eslint-disable-next-line no-unused-vars
 var ip = "http://103.200.23.120:3002/";

 //http://103.200.23.120:3002/api/product/products-qly
 // eslint-disable-next-line no-unused-vars
 var localhost = "http://localhost:3001/";
 // eslint-disable-next-line no-unused-vars
 var domain ="https://sonvnnike.com.vn/"
export const apiLogin = ip + "api/auth/login";
export const apiGetLayBaiViet = ip + "api/quantri/services/getBaiViet";

// export const apiQuanTriBaiViet = localhost + "api/quantri/services/apiBaiViet";

export const apiQuanTriBaiViet = ip + "api/quantri/services/apiBaiViet";


export const apiSanPham = ip + "api/sanpham/services/apiSanPham";
export const apiGetSanPham = ip + "api/product/products-qly";


export const apiDanhMuc = ip + "api/danhmuc/services/apiDanhMuc";
export const apiGetDanhMuc = ip + "api/danhmuc/services/getDanhMuc";
export const apiUploadImg = ip + "api/quantri/upload";
export const apiGetImg = ip + "api/quantri/getUploads";

export const apiDeleImg =ip+"api/quantri/deleteImage/"


export const apiGetDuAn = ip + "api/duan/services/getDuAn";
export const apiDuAn = ip + "api/duan/services";
