import initAPI from './src';

const api = initAPI({
  canvasHost: 'canvas.harvard.edu',
  // defaultCourseId: 108616,
  defaultCourseId: 53450,
  // accessToken: '1875~WxjfygW6HE7hfmZZeZfnKMz2LsdcnjyotMdIhQZP4AZ79vZLGIwHWEKTfwCDZk7R',
  // accessToken: '1875~YcklUjUNdSxBI7E2LnBIdShvUl2oZ0HkhJMCcu09ab2Jg0HJUaU8KZ7Up1TkSMKF',
  accessToken: '1875~Tcdp76BIAjRse0HazvwY491cKy8RF7ggSXKIUck2Ff50bKa4Fi7CweEnmMbkA8nN',
});

const main = async () => {
  console.log('Working...');

  const students = await api.course.listUsers({
    types: ['ta', 'student'],
  });

  console.log(students);



  // const ag = await api.course.assignmentGroup.update({
  //   assignmentGroupId: 199535,
  //   courseId: 53450,
  //   dropLowest: 1,
  //   neverDrop: [569172],
  // });
  // const x = await api.course.app.list({ courseId: 131221 });
  // x.forEach((app) => {
  //   console.log(app.name, app.url);
  //   if (!app.url) {
  //     console.log(app);
  //   }
  // });
  // const assignmentIds = [587684];
  // for (let i = 0; i < assignmentIds.length; i++) {
  //   const assignmentId = assignmentIds[i];
  //   console.log('Deleting: ', assignmentId);
  //   await api.course.assignment.delete({
  //     assignmentId,
  //     courseId: 108617,
  //   });
  // }
  // const migration = await api.course.migrateContent(
  //   {
  //     sourceCourseId: 108616,
  //     destinationCourseId: 108617,
  //     include: {
  //       // fileIds: [15162179, 15162088], // icon.png home dir, profile inside "hello", NO frogs, no "empty" and no "test" folder
  //       // quizIds: [275273], // quiz mig via quizzes
  //       // NOTE: Assignments did not fully migrate
  //       assignmentIds: [587682,588062,588064,590082,590084,590086,590088,590090,590768,602226,   590756 /* <- empty quiz */, 602241 /* quizzes next */], // all but "some assignment"
  //       // assignmentIds: [587682],
  //       // announcementIds: [789881, 789872], // "hi kids" and "bob", not "heyy"
  //       // discussionTopicsIds: [797707],
  //       // moduleIds: [224749, 227578],
  //       // pageIds: [632675, 687858],
  //     },
  //     dateShiftOptions: {
  //       dateHandling: DateHandlingType.RemoveDates,
  //       // oldStart: new Date('2022-01-01'), // Check that all dates are 2023
  //       // oldEnd: new Date('2022-08-31'),
  //       // newStart: new Date('2023-01-01'),
  //       // newEnd: new Date('2023-08-31'),
  //       // daySubstitutionMap: {
  //       //   [DayOfWeek.Sunday]: DayOfWeek.Wednesday, // All dates must be on Wednesdays
  //       //   [DayOfWeek.Monday]: DayOfWeek.Wednesday,
  //       //   [DayOfWeek.Tuesday]: DayOfWeek.Wednesday,
  //       //   [DayOfWeek.Wednesday]: DayOfWeek.Wednesday,
  //       //   [DayOfWeek.Thursday]: DayOfWeek.Wednesday,
  //       //   [DayOfWeek.Friday]: DayOfWeek.Wednesday,
  //       //   [DayOfWeek.Saturday]: DayOfWeek.Wednesday,
  //       // },
  //     }
  //   },
  // );

  console.log('Done!');
};

main();