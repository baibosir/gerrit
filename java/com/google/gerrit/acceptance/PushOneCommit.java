    this(notesFactory, approvalsUtil, queryProvider, db, i, testRepo, subject, files, null);
      assertReviewers(c, ReviewerStateInternal.REVIEWER, expectedReviewers);
      assertReviewers(c, ReviewerStateInternal.CC, expectedCcs);
          approvalsUtil.getReviewers(notesFactory.createChecked(db, c)).byState(state);