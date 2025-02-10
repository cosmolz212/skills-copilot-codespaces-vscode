function skillsMember() {
  return {
    name: 'John',
    skills: ['JavaScript', 'React', 'Node'],
    getSkills: function() {
      return this.skills;
    }
  };
}