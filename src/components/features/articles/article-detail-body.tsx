import ArticleMetadata from "@/components/composites/articles/article-metadata";
import Image from "next/image";

const ArticleDetailBody = () => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg pb-5">
      <Image
        src="/blog7.jpg"
        alt="blog-picture"
        width={480}
        height={480}
        className="aspect-video w-full rounded-t-lg"
      />
      <div className="w-full px-7 py-8 space-y-5">
        <ArticleMetadata />
        <div className="w-full text-[#666666]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
          debitis tenetur, assumenda eaque quia incidunt fugiat ducimus maxime
          enim qui, suscipit, tempore laboriosam voluptatum corporis totam magni
          natus expedita labore! Omnis nisi doloribus vel ducimus et, harum
          labore excepturi. Excepturi, minus, porro harum assumenda, possimus
          consequuntur ipsum laborum accusantium perspiciatis obcaecati illum
          maxime? Amet dolores cupiditate corrupti modi, numquam reprehenderit.
          Rerum laborum sed accusamus veniam dolores officiis reiciendis non
          voluptates iure aliquid blanditiis dicta dolorem, eos accusantium cum
          recusandae possimus sit nisi asperiores, reprehenderit iste hic quo?
          Quaerat, delectus quisquam? Dignissimos cupiditate fuga quia
          aspernatur ipsum porro vitae dolorum est tempore alias, rem voluptate
          tenetur impedit reprehenderit, saepe officiis nam! Temporibus,
          pariatur a aliquid ex itaque delectus facilis molestiae assumenda?
          Rerum, dignissimos non iusto modi earum suscipit expedita deleniti
          corrupti. Omnis, rem voluptates perspiciatis eos incidunt adipisci
          mollitia? Doloribus explicabo accusantium quod quam, fugiat dicta quis
          rem eaque quidem qui.
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailBody;
