const app = document.getElementById("app");

class Title extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: "30px", color: "rgba(0,0,0,.54)" }}>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <a href="#" style={{ textDecoration: "none", color: "black" }}>
        <div
          style={{
            minWidth: "150px",
            minHeight: "180px",
            borderRight: "1px solid rgba(0,0,0,.1)",
            borderBottom: " 1px solid rgba(0,0,0,.05)",
          }}
        >
          <img src={this.props.src} alt="" style={{ width: "80px" }} />
          <h3>{this.props.text}</h3>
        </div>
      </a>
    );
  }
}

class Bar extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            maxWidth: "1440px",
          }}
        >
          <Product src="img/ao.png" text="Thời Trang Nam" />
          <Product
            src="img\dienthoaivaphukien.png"
            text="Điện Thoại & Phụ Kiện"
          />
          <Product src="img\thietbidientu.png" text="Thiết Bị Điện Tử" />
          <Product src="img\maytinhvalaptop.png" text="Máy Tính & Laptop" />
          <Product
            src="img\mayanhvamayquayphim.png"
            text="Máy ảnh & Máy Quay Phim"
          />
          <Product src="img\dongho.png" text="Đồng Hồ" />
          <Product src="img\giaydepnam.png" text="Giày Dép Nam" />
          <Product
            src="img\thietbidiengiadung.png"
            text="Thiết Bị Điện Gia Dụng"
          />
          <Product src="img\thethaovadulich.png" text="Thể Thao & Du Lịch" />
          <Product src="img\xemay.png" text="Ô Tô & Xe Máy & Xe Đạp" />
        </div>

        <div
          style={{
            display: "flex",
            textAlign: "center",
            maxWidth: "1440px",
          }}
        >
          <Product src="img\thoitrangnu.png" text="Thời Trang Nữ" />
          <Product src="img\mevabe.png" text="Mẹ Và Bé" />
          <Product src="img\Nhacuavadoisong.png" text="Nhà Cửa Và Đời Sống" />
          <Product src="img\sacdep.png" text="Sắc Đẹp" />
          <Product src="img\suckhoe.png" text="Sức Khỏe" />
          <Product src="img\giaydepnu.png" text="Giày Dép Nữ" />
          <Product src="img\tuivinu.png" text="Túi ví Nữ" />
          <Product
            src="img\phukienvatrangsucnu.png"
            text="Phụ Kiện Và Trang Sức Nữ"
          />
          <Product src="img\bachhoaonline.png" text="Bách Hóa Online" />
          <Product src="img\nhasachonline.png" text="Nhà Sách Online" />
        </div>
      </div>
    );
  }
}


class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Title name="Danh Mục" />
        <Bar />
      </div>
    );
  }
}

ReactDOM.render(<Navbar />, app);











const Tittle = (tit) => (
  <div style={{ marginLeft: "30px", color: "rgba(0,0,0,.54)" }}>
    <h2>{tit.name}</h2>
  </div>
);

const Production = (sp) => (
  <a href="#" style={{ textDecoration: "none", color: "black" }}>
    <div
      style={{
        minWidth: "150px",
        minHeight: "180px",
        borderRight: "1px solid rgba(0,0,0,.1)",
        borderBottom: " 1px solid rgba(0,0,0,.05)",
      }}
    >
      <img src={sp.src} alt="" style={{ width: "80px" }} />
      <h3>{sp.text}</h3>
    </div>
  </a>
);



const Barr = () => (
  <div>
    <div style={{ display: "flex", textAlign: "center", maxWidth: "1440px" }}>
      <Production src="img/ao.png" text="Thời Trang Nam" />
      <Production src="img\dienthoaivaphukien.png" text="Điện Thoại & Phụ Kiện" />
      <Production src="img\thietbidientu.png" text="Thiết Bị Điện Tử" />
      <Production src="img\maytinhvalaptop.png" text="Máy Tính & Laptop" />
      <Production
        src="img\mayanhvamayquayphim.png"
        text="Máy ảnh & Máy Quay Phim"
      />
      <Production src="img\dongho.png" text="Đồng Hồ" />
      <Production src="img\giaydepnam.png" text="Giày Dép Nam" />
      <Production src="img\thietbidiengiadung.png" text="Thiết Bị Điện Gia Dụng" />
      <Production src="img\thethaovadulich.png" text="Thể Thao & Du Lịch" />
      <Production src="img\xemay.png" text="Ô Tô & Xe Máy & Xe Đạp" />
    </div>

    <div style={{ display: "flex", textAlign: "center", maxWidth: "1440px" }}>
      <Production src="img\thoitrangnu.png" text="Thời Trang Nữ" />
      <Production src="img\mevabe.png" text="Mẹ Và Bé" />
      <Production src="img\Nhacuavadoisong.png" text="Nhà Cửa Và Đời Sống" />
      <Production src="img\sacdep.png" text="Sắc Đẹp" />
      <Production src="img\suckhoe.png" text="Sức Khỏe" />
      <Production src="img\giaydepnu.png" text="Giày Dép Nữ" />
      <Production src="img\tuivinu.png" text="Túi ví Nữ" />
      <Production
        src="img\phukienvatrangsucnu.png"
        text="Phụ Kiện Và Trang Sức Nữ"
      />
      <Product src="img\bachhoaonline.png" text="Bách Hóa Online" />
      <Product src="img\nhasachonline.png" text="Nhà Sách Online" />
    </div>
  </div>
);

const Navbarr = () => (
  <div>
    <Tittle name="Danh Mục" />
    <Barr />
  </div>
);

ReactDOM.render(<Navbarr />, app);