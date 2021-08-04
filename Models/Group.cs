using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tntt_manegement.Models
{
    public class Group
    {
        public int groupId { get; set; }
        public string groupName { get; set; }
        public string Note { get; set; }

        public List<Class> Classes { get; set; }

        public List<Student> students { get; set; }
        public List<Teacher> teachers { get; set; }
    }
}
