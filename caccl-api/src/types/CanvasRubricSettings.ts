import CanvasRubricCriterion from './CanvasRubricCriterion';

interface CanvasRubricSettings {
  // the ID of the rubric
  id: number,
  // title of the rubric
  title: string,
  // the context owning the rubric
  context_id: number,
  context_type: string,
  points_possible: number,
  reusable?: boolean | null,
  read_only?: boolean | null,
  // whether or not free-form comments are used
  free_form_criterion_comments?: boolean | null,
  hide_score_total?: boolean | null,
  // An array with all of this Rubric's grading Criteria
  data: CanvasRubricCriterion[],
  // If an assessment type is included in the 'include' parameter, includes an
  // array of rubric assessment objects for a given rubric, based on the
  // assessment type requested. If the user does not request an assessment type
  // this key will be absent.
  assessments?: null | null,
  // If an association type is included in the 'include' parameter, includes an
  // array of rubric association objects for a given rubric, based on the
  // association type requested. If the user does not request an association type
  // this key will be absent.
  associations: null
};

export default CanvasRubricSettings;
