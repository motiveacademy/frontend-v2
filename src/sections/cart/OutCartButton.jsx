import DefaultButton from "@/commons/components/button";

const redirectURL = "https://app.midtrans.com/snap/v3/redirection/";

const OutCartButton = ({ item, courses }) => {
  switch (item.status) {
    case "Pending":
      return (
        <DefaultButton isLink={true} href={`${redirectURL}${item.snapToken}`}>
          Pay
        </DefaultButton>
      );

    case "Success":
      if (item.type === "Course") {
        const courseData = courses.find((course) => course.pid === item.id);
        return (
          <DefaultButton isLink={true} href={`/course/${courseData.id}`}>
            Go to Course
          </DefaultButton>
        );
      } else if (item.type === "Live Class") {
        return (
          <DefaultButton isLink={true} href={`/liveclass/${item.id}`}>
            Go to Live Class
          </DefaultButton>
        );
      }

    default:
      return <></>;
  }
};

export default OutCartButton;
