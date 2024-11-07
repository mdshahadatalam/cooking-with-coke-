import React from 'react'
import blog1 from '../assets/images/BlogImg/blog1.webp'
import blog2 from '../assets/images/BlogImg/blog2.webp'
import blog3 from '../assets/images/BlogImg/blog3.webp'
import blog4 from '../assets/images/BlogImg/blog4.webp'
import blog5 from '../assets/images/BlogImg/blog5.webp'
import blog6 from '../assets/images/BlogImg/blog6.webp'
import blog7 from '../assets/images/BlogImg/blog7.webp'
import blog8 from '../assets/images/BlogImg/blog8.webp'
import blog9 from '../assets/images/BlogImg/blog9.webp'
import blog10 from '../assets/images/BlogImg/blog10.webp'
import blogs11  from '../assets/images/BlogImg/blog11.webp'
import blogs12  from '../assets/images/BlogImg/blog12.webp'
import blogs13  from '../assets/images/BlogImg/blog13.webp'
import blogs14  from '../assets/images/BlogImg/blog14.webp'
import blogs15  from '../assets/images/BlogImg/blog15.webp'
import blogs16  from '../assets/images/BlogImg/blog16.webp'
import blogs17  from '../assets/images/BlogImg/blog17.webp'
import blogs18  from '../assets/images/BlogImg/blog18.webp'
import blogs19  from '../assets/images/BlogImg/blog19.webp'
import MissOne from '../assets/images/BlogImg/blogsMissOne.webp'
import MissTwo from '../assets/images/BlogImg/MissTwo.webp'
import { Link } from 'react-router-dom';




export const Blogs = () => {
  return (
    <>
    <section className='pt-14 pb-6'>
      <div className="container">

        <h3 id='All' className='font-bold text-2xl font-fontRegular text-center pb-8 tracking-widest'>ALL POSTS</h3>

        <div className='pt-4'>

          <a className='font-fontRegular text-xl py-2 px-3' href="#All"> All Posts</a>
          <Link to={'/cheaper'}><a className='font-fontRegular text-xl py-2 px-3' href="">Cheaper Than a Big Mac</a></Link>
          <Link to={'/kid'}> <a className='font-fontRegular text-xl py-2 px-3' href="">Kids Can Cook</a></Link>
          <Link to={'/archive'}> <a className='font-fontRegular text-xl py-2 px-3' href="">Archives</a></Link>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blog1} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Jun 6 . 1 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Simple Arrabbiata Sauce</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Ingredients: 1 28.2 oz can whole peeled tomatoes 4  cloves garlic 1/4 cup olive oil Chopped Calabrian  chiles Handful chopped parsley Basil...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blog2} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Jun 2 . 2 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Steak Frites with Red Wine <br/> Pan Sauce</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Servings: 2 Ingredients: French Fries 3 Russet  potatoes Ice water Vegetable (or any neutral) oil Dried parsley (to garnish) Salt Freshly...</p>
             </div>
            </div>
           </div>

          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blog3} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Oct 28, 2023 . 1 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>One-Pot Chicken and Rice</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>I recently found this recipe, and altered it to my  liking! Its a great post-workout meal, or an easy  week night dinner. It is really easy...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blog4} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Dec 30, 2023 . 1 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Spicy Chicken Tacos</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Ingredients (15 tacos): Chicken Fajitas: 3 lbs boneless  skinless chicken breast, cut into small pieces 2 sweet  red bell peppers, sliced...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blog5} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Oct 28, 2023 . 1 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>One-Pot Chicken and Rice</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>I recently found this recipe, and altered it to my  liking! Its a great post-workout meal, or an easy  week night dinner. It is really easy...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blog6} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Dec 30, 2023 . 1 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Spicy Chicken Tacos</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Ingredients (15 tacos): Chicken Fajitas: 3 lbs boneless  skinless chicken breast, cut into small pieces 2 sweet  red bell peppers, sliced...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>


        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blog7} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Apr 16, 2023 . 1 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>High Protein Breakfast Burrito</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Macronutrients: This has about 500 calories, 45 grams of carbohydrates, 25 grams of fat, and 35 grams of protein (for one serving)....</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blog8} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Jun 11, 2023 
         . 1 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Simple Slow-Cooker Pulled Pork</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Ingredients: 2-3 lbs boneless pork shoulder 12 oz can dark soda (Root Beer, Dr. Pepper) BBQ Sauce (Optional), I recommend Sweet Baby...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blog9} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Jan 16, 2023
                .s 2 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Sous Vide Chicken Breast</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>This chicken breast is super easy to make, and is delicious! It is a great dish for parties, because you can really cook it as long as...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blog10} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Mar 3, 2023
           . 1 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>How To Reverse Sear a Steak</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>I have heard a lot about reverse searing steaks and other cuts of meat, but I had never tried it until a couple weeks ago. It works...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blogs11} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Jul 19, 2022
               . 1 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-normal'>Healthy Tunisian Breakfast (Shakshouka)</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Ingredients: - 2 tablespoons olive oil - 3 cloves garlic, minced - 1 medium onion, diced - 1 teaspoon salt - 1 teaspoon pepper - 1...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blogs12} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Aug 10, 2022
         . 1 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Quick and Healthy Hummus</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Hummus is a classic Mediterranean dish. It is refreshing, and tastes amazing with fresh pita bread, but if you don't have time pita chips...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>


        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blogs13} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Apr 24, 2022
               . 3 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-normal'>4 Dollar Easy Spaghetti & Meatballs</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>INGREDIENTS: Meatballs: ¼ lb (123g) finely chopped mortadella / ham ~ $1.50+ (you won't use the whole box) 1 lb (454g) ground beef ~ $4+...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blogs14} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Jun 10, 2022
         . 2 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>20 Minute Cheap & Healthy Halloumi with Vegetables</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Hi Everyone! This is sort of a special post for me, because my grandfather is Lebanese, and this is my first time making a Lebanese dish....</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={MissOne} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Dec 30, 2021
                . 1 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-normal'>New-York Style Meatball Pizza In A Pizza Oven! (Ooni Koda 16)</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Today, I am going to be making Ingredients: 6-8 Meatball Halves Pizza Sauce (Blended whole peeled tomatoes works great) Pizza dough,...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blogs15} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Feb 19, 2022
         . 2 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Jamaican Jerk Meatballs with Sweet Pineapple Glaze</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Ingredients: MEATBALLS: Neutral oil 1 pound ground chicken or turkey 1 small yellow or red onion, finely diced 1 egg, beaten ¼ cup bread...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blogs16} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Nov 8, 2021
               . 2 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-normal'>Juiciest Birria Quesa Tacos</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>A delicious cheesy taco, that is full of juicy and flavorful meat. This is traditionally made on Mexican holidays, so it is quite a bit...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={MissTwo} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Dec 24, 2021
         . 1 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Simple & Delicious Carnitas Tacos</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Ingredients: 1kg pork shoulder (collar / butt) (cut into chunks) 4 tsp ground cumin 4 tsp smoked paprika 2 tsp chilli powder 2 tsp...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

            <div className=' border border-red-400 PostRes shadow-md '>

              <img className='img-fluid' src={blogs18} alt="image" />
              <div className='pt-4 ps-5 pb-24 pe-2'>
                <span className='text-lg font-fontRegular pt-3 d-block'>Aug 29, 2021
               . 3 min read</span>

                <div className='hover:text-red-400'>
                <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-normal'>Infallible Pan Seared Steak</h3>

                <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>A quick and easy steak recipe, that can work for a $10 New York Steak, to a $100 Wagyu Filet Mignon. I have made this recipe over and...</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blogs17} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Sep 5, 2021
         . 2 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>3-Ingredient BBQ Chicken Breast</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>Total Time: 15 Minutes + Grill Heating Serves: 6-8 Ingredients: 3 lbs boneless skinless chicken breast 2 Cups Frog Sauce Yardbird Rub To...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-6">

          </div>
          <div className="col-lg-6">

          <div className=' border border-red-400 PostRes shadow-md '>

          <img className='img-fluid' src={blogs19} alt="image" />
          <div className='pt-4 ps-5 pb-16 pe-2'>
          <span className='text-lg font-fontRegular pt-3 d-block'>Aug 15, 2021
          .1 min read</span>

             <div className='hover:text-red-400'>
             <h3 className='text-3xl font-fontRegular font-bold pt-4 text-justify tracking-wider'>Easy Barbecue Chicken Wings</h3>

              <p className='font-fontRegular text-xl pt-3 tracking-wider text-justify'>This was an amazing dish, and it also didn't take me very long. You can store the barbecue sauce, and it is great to heat up later on...</p>
             </div>
            </div>
           </div>
           
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
