"use client";
import { slideIn } from "@/constants/motion";
import SectionWrapper from "@/sections/SectionWrapper/SectionWrapper";
import { motion } from "framer-motion";
import Form, { Text } from "./ContactServer";
import { Suspense, useRef, useState } from "react";
import CanvasLoader from "@/constants/Loader";
import { Fox } from "./Fox";
import { Canvas } from "@react-three/fiber";

const ContactWrapper = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(!isSubmitting);
  };

 

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="flex-[0.75]  p-8 rounded-2xl dark:bg-black-100 bg-secondary"
      >
        <Text />
        <Form
          name={form.name}
          email={form.email}
          message={form.message}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          formRef={formRef}
        />
      </motion.div>

      <motion.div
        variants={slideIn("right", "spring", 0.2, 1)}
        initial={"hidden"}
        whileInView={"show"}
        className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] "
      >
        <Canvas camera={{ position: [0, 0, 5] }}>
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback={<CanvasLoader />}>
            <Fox
              // currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.3, 0.3, 0.3]}
            />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(ContactWrapper, "contact");
