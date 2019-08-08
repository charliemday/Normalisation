import { schema } from "normalizr";

const user = new schema.Entity("users");

const lesson = new schema.Entity("lessons");

const lessonStep = new schema.Entity("lessonsteps");

const activePromotion = new schema.Entity("activePromotions");

const learnerUpload = new schema.Entity("learner_uploads", {
  lessonsteps: lessonStep,
});

export const mentor = new schema.Entity("mentors", {
  lessons: [lesson],
  learner_uploads: [learnerUpload],
  creator_information: user,
  active_promotion: activePromotion,
});
