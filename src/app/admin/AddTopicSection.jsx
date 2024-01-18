"use client";

import DefaultButton from "@/commons/components/button";
import { addCourseTopic, getCourseTopic, getSubtopic } from "@/commons/services/course";
import { useRef, useState } from "react";

const EXAMPLE = [
  {
    id: "faktor-pengurang-keberkahan",
    title: "Faktor yang Mengurangi Keberkahan Dalam Organisasi",
    topicNum: 4,
    subtopic: [],
  },
];

const AddTopicSection = () => {
  const [selectIds, setSelectIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [courseList, setCourseList] = useState(EXAMPLE);

  const courseRef = useRef();

  const idRef = useRef();
  const nameRef = useRef();
  const orderRef = useRef();

  const addTopic = async () => {
    setLoading(true);
    const courseID = "course-PCO";
    const topicID = idRef.current.value;
    const refIDs = [...selectIds, topicID];

    await addCourseTopic(courseID, refIDs, {
      title: nameRef.current.value,
      topicNum: parseInt(orderRef.current.value),
    });

    setLoading(false);
  };

  const changeToKBO = async (e) => {
    e.preventDefault()
    console.log(`Changing course... KBO`);

    const courses = await getSubtopic(["course-KBO", "topic"]);
    setCourseList(courses);
  };

  const changeToPCO = async (e) => {
    e.preventDefault()
    console.log(`Changing course... PCO`);

    const courses = await getSubtopic(["course-PCO", "topic"]);
    setCourseList(courses);
  };

  return (
    <section className="space-y-8">
      <p className="font-bold text-lg">Tambah Topik</p>

      <div className="space-y-2">
        <p>Pilih Course</p>
        <div
          className="p-2 rounded border hover:cursor-pointer hover:bg-primary-yellow"
          onClick={changeToKBO}
        >
          <p>Course Keberkahan Dalam Berogranisasi</p>
        </div>
        <div
          className="p-2 rounded border hover:cursor-pointer hover:bg-primary-yellow"
          onClick={changeToPCO}
        >
          <p>People Centric Organizaiton</p>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="font-bold">Isi Data Topik</p>

        <label htmlFor="topicID" className="font-semibold">
          ID Topik
        </label>
        <input type="text" ref={idRef} id="topicID" className="border" />

        <label htmlFor="topicName" className="font-semibold">
          Judul Topik
        </label>
        <input type="text" ref={nameRef} id="topicName" className="border" />

        <label htmlFor="topicOrder" className="font-semibold">
          Urutan Topik
        </label>
        <input type="text" ref={orderRef} id="topicOrder" className="border" />
      </div>

      <div>
        <p className="font-bold">Pilih Parent Topik</p>
        <div className="space-y-8">
          {courseList.map((topic) => (
            <Topic
              data={topic}
              parentIDs={[]}
              setSelectIds={setSelectIds}
              key={topic.id}
            />
          ))}
        </div>
      </div>

      <DefaultButton onClick={() =>  setSelectIds([])}>Remove Select IDs</DefaultButton>
      <DefaultButton onClick={addTopic}>Tambah Topik</DefaultButton>
      {loading ? <p>Loading...</p> : <p></p>}
    </section>
  );
};

const Topic = ({ data, parentIDs, setSelectIds }) => {
  if (data.subtopic?.length > 0) {
    return (
      <div className="my-2">
        <div className="bg-slate-200 px-4 py-2 rounded">
          <p>
            {data.topicNum}. {data.title}
          </p>
          <p>
            Parent IDs:{" "}
            {parentIDs.map((id) => (
              <span key={id}>{id},</span>
            ))}
          </p>
        </div>

        <div className="pl-2">
          {data.subtopic.map((topic) => (
            <Topic
              data={topic}
              parentIDs={[...parentIDs, data.id, "topic"]}
              setSelectIds={setSelectIds}
              key={topic.id}
            />
          ))}
        </div>

        <DefaultButton
          onClick={() => setSelectIds([...parentIDs, data.id, "topic"])}
        >
          Pilih Topik Ini
        </DefaultButton>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-200 px-4 py-2 my-2 rounded">
        <p>
          {data.topicNum}. {data.title}
        </p>
        <p>
          Parent IDs:{" "}
          {parentIDs.map((id) => (
            <span key={id}>{id},</span>
          ))}
        </p>
        <DefaultButton
          onClick={() => setSelectIds([...parentIDs, data.id, "topic"])}
        >
          Pilih Topik Ini
        </DefaultButton>
      </div>
    );
  }
};

export default AddTopicSection;
