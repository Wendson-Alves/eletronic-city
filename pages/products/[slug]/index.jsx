import LayoutType1 from "@/layouts/LayoutType1";
import styles from "@/pages/products/[slug]/Slug.module.scss";
import SlugProduct from "@/components/SlugProduct/SlugProduct"

const PageProduct = () => {

  return (
    <LayoutType1 title={"Product"}>
      <section className={`container ${styles.slug}`}>
        {JSON.stringify()}
        {/*{router.pathname}*/}
        <SlugProduct
          rate={4}
        />
      </section>
    </LayoutType1>
  );
};

export default PageProduct;
