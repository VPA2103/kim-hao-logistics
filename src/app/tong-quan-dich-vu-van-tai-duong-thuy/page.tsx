"use client";

import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";


// import "bootstrap/dist/css/bootstrap.min.css";

interface SocialPlatform {
  name: string;
  icon: string;
  url: string;
}

// Định nghĩa props cho SocialButton
interface SocialButtonProps {
  platform: SocialPlatform;
  url: string;
  title: string;
}

const DichVuHangDuAn = () => {


  
  return (
    <main className="py-5">
      <Container fluid="lg">
        <Row className="g-4">
          {/* Main Content */}
          <Col lg={9}>
            <article
              className="bg-white p-4 rounded shadow-sm"
              style={{ marginTop: "70px" }}
            >
              {/* Header */}
              <header className="text-center mb-5">
                <div className="d-block mb-2">
                  <Link
                    href="/van-tai-duong-thuy"
                    className="badge bg-primary text-decoration-none"
                  >
                    VẬN TẢI ĐƯỜNG THỦY
                  </Link>
                </div>
                <h1 className="display-4 mb-4">DỊCH VỤ HÀNG DỰ ÁN</h1>
                <div className="border-bottom mb-5"></div>
              </header>

              {/* Content Sections */}
              <div className="content">
                {[1, 2, 3, 5, 6, 8].map((num) => (
                  <Card key={num} className="mb-5 border-0">
                    <Card.Body>
                      <h2 className="text-center text-primary mb-4">
                        <u>{getSectionTitle(num)}</u>
                      </h2>
                      <div className="ratio ratio-16x9">
                        <Image
                          src={`/filemanager/userfiles/Tommy/PROJECT%20CARGO${
                            num > 1 ? ` (${num})` : ""
                          }.jpg`}
                          alt={getImageAlt(num)}
                          fill
                          className="img-fluid rounded"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Social Sharing */}
              <div className="text-center mt-5">
                <div className="border-top pt-5 mb-4"></div>
                <h5 className="mb-4">Chia sẻ bài viết</h5>
                <Row className="justify-content-center g-3">
                  {socialPlatforms.map((platform) => (
                    <Col xs="auto" key={platform.name}>
                      <SocialButton
                        platform={platform}
                        url="https://scanwelllogistics.vn/dich-vu-hang-du-an.html"
                        title="DỊCH VỤ HÀNG DỰ ÁN"
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </article>
          </Col>

          {/* Sidebar */}
          <Col lg={3}>
            <div className="bg-light p-4 rounded shadow-sm">
              <RelatedPosts />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

// Component phụ cho Social Buttons
const SocialButton = ({ platform, url, title }: SocialButtonProps) => {
  const shareUrl = platform.url
    .replace("{url}", encodeURIComponent(url))
    .replace("{title}", encodeURIComponent(title));

  return (
    <Button
      variant="outline-primary"
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-circle"
      onClick={(e) => {
        e.preventDefault();
        window.open(
          shareUrl,
          "_blank",
          "width=500,height=500,top=300px,left=300px"
        );
      }}
      aria-label={`Share on ${platform.name}`}
    >
      <i className={`bi bi-${platform.icon}`}></i> {/* Đảm bảo là có `bi` */}
    </Button>
  );
};


// Component phụ cho Bài viết liên quan
const RelatedPosts = () => {
  const posts = [
    {
      title: "HÀNG NGUY HIỂM",
      url: "/hang-nguy-hiem",
      image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
    },
    {
      title: "HÀNG NGUY HIỂM",
      url: "/hang-nguy-hiem",
      image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
    },
    {
      title: "HÀNG NGUY HIỂM",
      url: "/hang-nguy-hiem",
      image: "/filemanager/userfiles/images2641-5c32b9fab0cfc-1024x683.jpg",
    },
    // Thêm các bài viết khác
  ];

  return (
    <div className="related-posts">
      <h5 className="mb-4">Bài viết liên quan</h5>
      <div className="border-bottom mb-4"></div>
      <div className="list-group">
        {posts.map((post, index) => (
          <Link
            href={post.url}
            key={index}
            className="list-group-item list-group-item-action border-0 p-3 mb-3 rounded"
          >
            <div className="row g-3 align-items-center">
              <div className="col-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={70}
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-8">
                <h6 className="mb-0">{post.title}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Helper functions
const getSectionTitle = (num: number): string => {
  const titles: Record<number, string> = {
    1: "CHỨNG NHẬN",
    2: "CHUYÊN CÁC DỰ ÁN",
    3: "CHUYÊN TUYẾN",
    5: "VĂN PHÒNG ĐẠI DIỆN",
    6: "HÌNH ẢNH THI CÔNG",
  };
  return titles[num] || "CHỨNG NHẬN";
};

const getImageAlt = (num: number): string => {
  const altTexts: Record<number, string> = {
    1: "Chứng nhận của công ty",
    2: "Các dự án chuyên nghiệp",
    3: "Chuyên tuyến vận chuyển",
    5: "Văn phòng đại diện",
    6: "Hình ảnh thi công",
    8: "Hình ảnh thực tế của dự án",
  };
  return altTexts[num] || "Default image description";
};

const socialPlatforms: SocialPlatform[] = [
  {
    name: "whatsapp",
    icon: "whatsapp",
    url: "whatsapp://send?text={title} - {url}",
  },
  {
    name: "facebook",
    icon: "facebook",
    url: "https://www.facebook.com/sharer.php?u={url}",
  },
  {
    name: "twitter",
    icon: "twitter",
    url: "https://twitter.com/share?url={url}&text={title}",
  },
  {
    name: "linkedin",
    icon: "linkedin",
    url: "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}",
  },
];

export default DichVuHangDuAn;
