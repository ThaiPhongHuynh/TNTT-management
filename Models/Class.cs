using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tntt_manegement.Models
{
    public class Class
    {
        public int classId { get; set; }
        public string className { get; set; }
        public string Note { get; set; }

        public Group Group { get; set; }
        public int groupId { get; set; }

        public List<Student> students { get; set; }
        public List<Teacher> Teachers { get; set; }
    }
}
