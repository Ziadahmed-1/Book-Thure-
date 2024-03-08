import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import BookCard from "../components/BookCard";


//import { useState, useEffect, useMemo } from "react";
// import { motion, useScroll } from "framer-motion";
// import { useRef } from "react";

const HighestRating = function ({ setCartItems, cartItems }) {
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1 1"],
  // });

  // const [highestRatedBooks, setHighestRatedBooks] = useState(null);
  // const url =
  //   "https://books-api7.p.rapidapi.com/books/find/rating?lte=5&gte=4.1&p=1";
  // const options = useMemo(() => {
  //   return {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "2322a1681bmsh10ca76e689ff844p19faa6jsn929ecd5397f8",
  //       "X-RapidAPI-Host": "books-api7.p.rapidapi.com",
  //     },
  //   };
  // }, []);

  // useEffect(() => {
  //   fetch(url, options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setHighestRatedBooks(data);
  //     });
  // }, [url, options]);
  const highestRatedBooks = [
    {
      author: {
        first_name: "Clive",
        last_name: "Lewis",
      },
      review: {
        name: "Debra",
        body: "What are you doing on that wardrobe? Narnia Business!!\nI read this book as a book challenge and adored it. I had not read this book before and did not know of its existence as a child. I would have loved it even more then, I imagine.\nFour English children, removed from London for their safety during WWII, are sent to a country manor to live with a professor. Lucy is the first to enter the wardrobe and be transported into the secret world of Narnia. There she meets a talking faun who eventually warns her about the white witch who keeps Narnia in a constant state of winter. A human’s presence in Narnia is threatening to her and the animals are under orders to inform her at once. Once back home, she informs her siblings who do not believe her until they too eventually enter the wardrobe and the world of Narnia.\nNarnia is full of talking animals, magic, and the loathsome witch who turns animals into stone statues if they do not do as she pleases. With the help of a Beaver couple, they escape in time and get to meet Aslan, who teaches them true bravery, sacrifice and teamwork.\nThis is a great fantasy book for both children and adults alike. Suspension of belief and a desire for entertainment is all one needs to enjoy this book. The illustrations are precious and go perfectly with the story.",
      },
      _id: "65797bebb06454dfd2c1a1a4",
      book_id: 71,
      title: "The Lion, the Witch and the Wardrobe",
      pages: 208,
      genres: [
        "Fiction",
        "Fantasy",
        "Classics",
        "Adventure",
        "Magic",
        "Young Adult",
      ],
      rating: 4.23,
      plot: "“The Lion, the Witch and the Wardrobe” is a novel by C.S. Lewis. It tells the story of four siblings - Peter, Susan, Edmund, and Lucy - who are sent away from London during World War II to live with a professor in the countryside. While exploring the house, Lucy discovers a wardrobe that leads to a magical land called Narnia. There, she meets a faun named Mr. Tumnus, who tells her about the evil White Witch who has cursed Narnia with eternal winter. The siblings soon find themselves caught up in a battle between the forces of good and evil, with the fate of Narnia hanging in the balance. Will they be able to defeat the White Witch and restore Narnia to its former glory? You’ll have to read the book to find out.",
      cover: "https://images.thenile.io/r1000/9780007588527.jpg",
      url: "https://www.amazon.in/Lion-Witch-Wardrobe-Chronicles-Narnia/dp/0007363664/ref=sr_1_1?crid=28AOWEIPIVQ7U&keywords=The+Lion%2C+the+Witch+and+the+Wardrobe&qid=1702457105&sprefix=the+lion%2C+the+witch+and+the+wardrobe%2Caps%2C214&sr=8-1",
      __v: 0,
    },
    {
      author: {
        first_name: "Clive",
        last_name: "Lewis",
      },
      review: {
        name: "Dannii",
        body: "This is my seventh journey into the fantastical lands of Narnia, as I have chosen to read the series in chronological rather than publication order.\nWhat a fitting end to such an epic series! Despite having a darker message and more serious tone than the other stories, I enjoyed this just as much as the previous books.\nIt has been centuries since the last sighting of the mystical Aslan and his name has turned from legend to myth. With some falsely using his name and status, and others denouncing him altogether, it is left to the returning children from our world to save Narnia once again.\nDespite a similar running theme, this seemed aimed at a more adult audience. There was some dark imagery and an overall more sinister tone. However, as an adult reader myself, I enjoyed these new aspects.\nI adored seeing the return of old faces and, without them, this would not have been a proper conclusion. I am sad to say goodbye but I know I will be returning, probably soon, to one of my new favourite fictional lands.",
      },
      _id: "65798777b06454dfd2c1a1b6",
      book_id: 77,
      title: "The Last Battle",
      pages: 208,
      genres: [
        "Fiction",
        "Fantasy",
        "Classics",
        "Adventure",
        "Childrens",
        "Young Adult",
      ],
      rating: 4.01,
      plot: '“The Last Battle” is a novel by C.S. Lewis and is the seventh and final book in the “Chronicles of Narnia” series. It tells the story of King Tirian, the last king of Narnia, who leads the fight of Narnia against the Calormenes. Eustace Scrubb, a friend of Narnia and cousin to the Pevensie siblings, and Jill Pole, a friend of Narnia, also fight for the Narnians. The novel is set some 200 Narnian years after “The Silver Chair” and about 2500 years (and 49 Earth years) since the creation of the world narrated in “The Magician’s Nephew”. A false Aslan is set up in the north-western borderlands and conflict between true and false Narnians merges with that between Narnia and Calormen, whose people worship Tash. It concludes with termination of the world by Aslan, after a "last battle" that is practically lost.',
      cover:
        "https://d3525k1ryd2155.cloudfront.net/h/635/394/123394635.0.x.jpg",
      url: "https://www.amazon.in/Last-Battle-Chronicles-Narnia/dp/000736380X/ref=sr_1_1?crid=1534XUT464P5W&keywords=The+Last+Battle&qid=1702462717&sprefix=the+magician%27s+nephew%2Caps%2C568&sr=8-1",
      __v: 0,
    },
    {
      author: {
        first_name: "Clive",
        last_name: "Lewis",
      },
      review: {
        name: "Aleksander",
        body: "I wasn't much for reading nonfiction voluntarily in my youth. The Problem of Pain was the second installment of Lewis' nonfiction I chose of my own free will (after The Abolition of Man, only because of the preface to That Hideous Strength) and my first propositional apologetics book by any author. It therefore probably wields outsized influence on my opinions, being formative; but I still think The Problem of Pain is Lewis' best propositional apologetics book (I think his essays are generally stronger than his books), and ranks among the best-in-genre.\nBaldly titled, the book considers how to square the obvious realities of human suffering, evil, and moral imperfections in the natural world (including animal suffering), plus the asserted existence of Hell, with the asserted existence of a benevolent divine Creator.\nIt is not a book designed to comfort readers, nor to provide definitive or authoritative answers to these questions. Rather, it presents well-considered, well-researched, morally- and intellectually-satisfying hypotheses that, if true, resolve the apparent contradiction between Christian belief in the Creator's goodness and our lived reality of the Creation's pain.\nIf that paradox troubles you, this book may help -- even if you don't find it fully convincing.\nThis book, and all books of its kind, do their best work by helping us clamber out of the narrow spaces inside our own heads, where shades of error in our education or the solitary spiral of our inner puzzlings can trap us, and into a wider world of hope. I don't mean mere speculation; I mean the realization, which strikes me often, that many thousands of people much smarter than me have considered these problems deeply, and concluded that certain beliefs are reasonable, even after rigorous examination. I may not find all the right answers, but the search is not meaningless; and I am not alone.",
      },
      _id: "6579975eb06454dfd2c1a1cb",
      book_id: 84,
      title: "The Problem of Pain",
      pages: 176,
      genres: [
        "Nonfiction",
        "Faith",
        "Classics",
        "Philosophy",
        "Theology",
        "Religion",
        "Christianity",
        "Spirituality",
      ],
      rating: 4.12,
      plot: "“The Problem of Pain” is a nonfiction theological work by C.S. Lewis that explores why pain exists in a world presumably ruled by a just God. The book was Lewis’s first Christian work, published in 1940, and it was followed by two more widely read Christian works— A Case for Christianity in 1942 and Mere Christianity in 1943. In the book, Lewis examines the nature of God’s divine love, of man’s evil, of heaven and hell, our relationship to animals, and what role suffering plays in the lives of animals. Lewis attempts to reconcile God’s goodness with the evil and suffering in the world, a theological problem called theodicy. The book is an attempt to “solve the intellectual problem raised by suffering”.",
      cover:
        "https://th.bing.com/th/id/R.ec846690020d59271889acda748b4881?rik=3fRzwCQbHFoNKw&riu=http%3a%2f%2fimg1.imagesbn.com%2fp%2f9780060652968_p0_v4_s260x420.JPG&ehk=lKjaEM4ViuuuP%2bssHpd5V5iQ2FbxeTxsaM%2f2Vo3C%2bPU%3d&risl=&pid=ImgRaw&r=0",
      url: "https://www.amazon.in/Problem-Pain-Lewis-Signature-Classic/dp/0007461267/ref=sr_1_1?crid=39FSQ86CRSVMX&keywords=The+Problem+of+Pain&qid=1702466716&sprefix=the+problem+of+pain%2Caps%2C254&sr=8-1",
      __v: 0,
    },
    {
      author: {
        first_name: "Charles",
        last_name: "Dickens",
        middle_name: "John Huffman",
      },
      review: {
        name: "Carlie",
        body: '"I have in my heart of hearts a favourite child. And his name is DAVID COPPERFIELD"\nI have also a favorite author and his name is Charles Dickens.This novel is poetry. To truly appreciate the beauty of the English language, one must read David Copperfield. This book cannot be classified. It is a love story, a drama, and a comedy. It has elements of horror and suspense. I laughed hysterically, sobbed uncontrollably, and threw it to a wall in a fit of anger. It annoyed, bored, and entrapped me.\nThe characters in this novel are like real people to me and I feel for them as I feel for living creatures. I despise Mr. Murdstone, I adore David, I want to slap his mother, I would spit on Dora, I laugh with Peggotty, I cheer Emily on, I pity Uriah Heep, and I sympathize with his aunt Betsy Trotwood. It was such a memorable experience that more than 15 years later, I can still recall certain scenes as if they were part of my actual memory.\nAll that is good about this world (innocence, justice, truth) can be found within these pages. I cannot reccommend it highly enough.',
      },
      _id: "653fce69bcb135ac0922a0df",
      book_id: 14,
      title: "David Copperfield",
      pages: 882,
      genres: [
        "Classics",
        "Fiction",
        "Literature",
        "Novels",
        "Historic fiction",
      ],
      rating: 4.03,
      plot: "David Copperfield is the story of a young man's adventures on his journey from an unhappy and impoverished childhood to the discovery of his vocation as a successful novelist. Among the gloriously vivid cast of characters he encounters are his tyrannical stepfather, Mr Murdstone; his brilliant, but ultimately unworthy school-friend James Steerforth; his formidable aunt, Betsey Trotwood; the eternally humble, yet treacherous Uriah Heep; frivolous, enchanting Dora Spenlow; and the magnificently impecunious Wilkins Micawber, one of literature's great comic creations.",
      cover:
        "https://i5.walmartimages.com/asr/56f890e5-b099-460d-b735-f895a92d51ac_1.cc424c493a8888fd7ae0a71e7f607ec7.jpeg",
      url: "https://www.amazon.in/David-Copperfield-Charles-Dickens/dp/8175994282/ref=sr_1_1_sspa?crid=24G90QDITOB9P&keywords=david+copperfield+by+charles+dickens&qid=1698680273&sprefix=david+copp%2Caps%2C250&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      __v: 0,
    },
    {
      author: {
        first_name: "Jane",
        last_name: "Austen",
        middle_name: "",
      },
      _id: "652b8d86b9ee9bb5d1bbda9b",
      book_id: 1,
      title: "Sense and Sensibility",
      pages: 368,
      genres: ["Romance", "Fiction", "Classics"],
      reviews: {
        name: "Holly Parker",
        body: "I love the story (though not as much as I love Pride and Prejudice). My only complaint is how old Colonel Brandon is. Justify it all you want with \"it was a different time;\" he is more than twice Marianne's age at the beginning of the book (he's 35, she's 16). He could be her father. Yikes. Otherwise, I love the book and all its dramas and pettiness.",
      },
      cover: "https://cdn2.penguin.com.au/covers/original/9780375756733.jpg",
      url: "https://www.amazon.in/Sense-Sensibility-Penguin-Classics-Austen/dp/0141439661/ref=sr_1_3?crid=2HVW537O79PTA&keywords=Sense+and+Sensibility&qid=1697352083&sprefix=sense+and+sensibility%2Caps%2C254&sr=8-3",
      plot: "Abeloved classic, Austen's first published novel explores the question of what drives your life: your heart or your head? The Dashwood sisters, Elinor and Marianne, are as different as sisters can be. Serious Elinor lives by reason and thoughtfulness while her younger sister, Marianne, only follows her passions. But in questions of love, they learn neither the heart nor head alone will lead them to happiness. Filled with romance, Austen's brilliant wit, and rich characterization, this is a celebration of sisterly love and the need for family--no matter how different they might be from us.",
      rating: 4.3,
    },
  ];
  return (
    <
      // ref={ref}
      // style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
      <div className="dark:bg-darkCustom bg-stone-100 pb-16 lg:pb-24 pt-12 px-4 md:px-10 lg:px-20">
        <h3 className="md:pt-8 lg:pt-12 xl:pt-16 text-center md:text-start text-2xl md:text-3xl lg:text-[2.5rem] font-bold mb-10 lg:mb-14 text text-balance w-fit md:max-w-1/2 dark:text-stone-200  ">
          Dive into these{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-violet-500 ">
            top-rated{" "}
          </span>{" "}
          reads and discover your next obsession
          <FontAwesomeIcon icon={faFire} className="md:ml-2 lg:ml-4" />
        </h3>

        <div className="mx-auto rounded-lg bg-stone-200 shadow-xl justify-center gap-5 flex items-center flex-wrap py-10">
          {highestRatedBooks?.map((book) => (
            <BookCard
              key={book.book_id}
              book={book}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default HighestRating;
